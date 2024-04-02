import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { getAppInfo } from "../services/BEApis/appInfo";
import { Spinner } from "@gluestack-ui/themed";
import { colors4C, sizes4C } from "../asthetics";

const LegalsScreen = () => {
  const navigation = useNavigation();
  const [privInfo, setPrivInfo] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const fnGetPrivacyPolicy = async () => {
    setLoading(true);
    const res = await getAppInfo();
    console.log(res?.data);

    setPrivInfo(await res?.data);
    setLoading(false);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Privacy Policy & T&C",
    });
  }, []);

  useEffect(() => {
    fnGetPrivacyPolicy();
  }, []);

  return (
    <View style={styles.container}>
      {loading && <Spinner color={colors4C.purple4C} />}
      {!loading && <Text>{privInfo[0]?.privacy} </Text>}
      {!loading && <Text>{privInfo[0]?.terms} </Text>}
    </View>
  );
};

export default LegalsScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: colors4C.light4C,
    gap: sizes4C.small4C,
    padding: sizes4C.medium4C,
  },
});
