import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { getAppInfo } from "../services/BEApis/appInfo";
import { Spinner } from "@gluestack-ui/themed";

const AppInfoScreen = () => {
  const navigation = useNavigation();
  const [appInfo, setAppInfo] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const fnGetAppInfo = async () => {
    setLoading(true);
    const res = await getAppInfo();
    console.log(res?.data);

    setAppInfo(await res?.data);
    setLoading(false);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "App Information",
    });
  }, []);

  useEffect(() => {
    fnGetAppInfo();
  }, []);

  return (
    <View style={styles.container}>
      {loading && <Spinner />}
      {!loading && <Text>{appInfo[0]?.appName}</Text>}
      {!loading && <Text>{appInfo[0]?.appVersion}</Text>}

    </View>
  );
};

export default AppInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
