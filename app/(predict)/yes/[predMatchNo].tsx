import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import NumberPad from "../../appComponents/appUtils/NumberPad";
import { colors4C, imgBlurHash4C, sizes4C } from "../../asthetics";
import { Image } from "expo-image";

// @ts-ignore
import getTeamImageUrl from "../../appComponents/appUtils/functions/getImageUrl";
import { router, useNavigation } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { apiGetMatchByMatchNo } from "../../services/BEApis/match";

const TradeForMatchNo = () => {
  const { predMatchNo } = useLocalSearchParams();
  const navigation = useNavigation();
  const [tradeData, setTradeData] = useState({} as any);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const fnGetTradeById = async () => {
    console.log(predMatchNo);
    const res = await apiGetMatchByMatchNo(predMatchNo);
    console.log("Res fnGetTradeById", res?.data);
    setTradeData(res?.data);
  };

  console.log("tradeData", tradeData);

  useEffect(() => {
    // Update header name when component mounts
    navigation.setOptions({
      headerTitle: "Trade",
    });
  }, []);

  useEffect(() => {
    fnGetTradeById();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={getTeamImageUrl(`${tradeData?.matchTeamB}Logo`)}
          placeholder={imgBlurHash4C}
          contentFit="cover"
          transition={8}
        />
        <Text style={{ ...styles.textLabel, fontSize: 14 }}>
          {tradeData?.matchTeamA} vs {tradeData?.matchTeamB}
        </Text>
        <Text
          style={{ ...styles.textLabel, color: colors4C.gray4C, fontSize: 16 }}
        >
          Trading on YES at ₹{tradeData?.matchTeamAOdds}{" "}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Feather name="info" size={18} color={colors4C.purple4C} />
        <Text style={styles.infoText}>
          Matching happens only when we find another foresee player with
          opposite{" "}
        </Text>
      </View>

      <View style={styles.numberPadContainer}>
        <NumberPad
          predValue={tradeData?.matchTeamBOdds}
          predTeamName={tradeData?.matchTeamB}
          predMatchNo={predMatchNo}
          scope="trade"
          btnText="Confirm"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: sizes4C.small4C,
    padding: sizes4C.medium4C,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: sizes4C.small4C,
  },
  imageContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: colors4C.white4C,
    padding: sizes4C.small4C,
    borderRadius: sizes4C.small4C,
  },

  textLabel: {
    fontSize: 16,
    color: colors4C.blue4C,
    padding: sizes4C.small4C,
    paddingBottom: 0,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: sizes4C.small4C,
    gap: sizes4C.small4C,
    // Truncate text
    // flexWrap: "wrap",
  },
  infoText: {
    fontSize: 10,
    color: colors4C.purple4C,
  },
  numberPadContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: sizes4C.small4C,
    // padding: sizes4C.small4C,
  },
  topupButton: {
    backgroundColor: colors4C.purple4C,
    padding: 12,
    borderRadius: sizes4C.small4C,
  },
  buttonText: {
    color: colors4C.white4C,
    textAlign: "center",
  },
});

export default TradeForMatchNo;
