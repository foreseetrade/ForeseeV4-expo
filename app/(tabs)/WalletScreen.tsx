import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import WalBalanceCard from "../appComponents/appCards/WalBalanceCard";

import { Link } from "expo-router";
import {
  borderRadius4C,
  colors4C,
  imgBlurHash4C,
  spacing4C,
} from "../asthetics";
import TransactionCard from "../appComponents/appCards/TransactionCard";
import TranButton from "../appComponents/appButtons/TranButton";
import { Feather } from "@expo/vector-icons";
import { apiGetPredictions } from "../services/BEApis/prediction";
import { getExpoStorage } from "../services/expo-storage";
import PredictionCard from "../appComponents/appCards/PredictionCard";
import { utilXtimeAgo } from "../appComponents/appUtils/functions/utilXtimeAgo";
import { Image } from "expo-image";

// @ts-ignore
import emptyState from "../../assets/images/feedbacks/EmptyState.png";
import { Spinner } from "@gluestack-ui/themed";
const WalletScreen = () => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  const [loading, setLoading] = useState(false);

  const [tabData, setTabData] = useState([]);

  const fnGetUserHistory = async () => {
    setLoading(true);

    console.log("Trades");
    const storedEmail = await getExpoStorage("localEmail");
    const extractedEmail = storedEmail?.replace(/^"(.*)"$/, "$1");

    const res = await apiGetPredictions(extractedEmail as string);
    console.log("Res GetPredictions", res?.data);
    res?.data.sort(
      (a: any, b: any) =>
        Date.parse(b.predCreatedAt) - Date.parse(a.predCreatedAt)
    );

    setTabData(res?.data);

    setLoading(false);
  };

  useEffect(() => {
    fnGetUserHistory();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        gap: spacing4C.medium4C,
        padding: spacing4C.small4C,
        width: "100%",
      }}
    >
      {/* <Text>WalletScreen</Text> */}
      <WalBalanceCard cardHeight={104} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: spacing4C.small4C,
          width: "100%",
        }}
      >
        <TouchableOpacity onPress={handleClose}>
          <TranButton
            // navigateTo="/(wallet)/TopupScreen"
            scope="topup"
            btnText="Topup"
            leftIcon={<Feather name="send" size={16} color={colors4C.blue4C} />}
          />
        </TouchableOpacity>
        <TranButton
          // navigateTo="/(wallet)/WithdrawScreen"
          scope="withdraw"
          btnText="Withdraw"
          leftIcon={
            <Feather name="arrow-down" size={16} color={colors4C.blue4C} />
          }
        />
        <TranButton
          navigateTo="/(wallet)/AllTransactionsScreen"
          btnText="History"
          leftIcon={
            <Feather name="file-text" size={16} color={colors4C.blue4C} />
          }
        />
      </View>
      <Link href="/(wallet)/AllTransactionsScreen" asChild>
        <Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: spacing4C.small4C,
            }}
          >
            <Text style={{ color: colors4C.blue4C }}>Recent Transactions</Text>
            <Text style={{ color: colors4C.purple4C }}>See All</Text>
          </View>
        </Pressable>
      </Link>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: colors4C.white4C,
          borderRadius: borderRadius4C.small4C,
        }}
      >
        {tabData.map((item: any, index: any) => (
          <PredictionCard
            key={index}
            predAmt={item.predTotalValue}
            predStatus={item.predStatus}
            predTeam={item.predTeamName}
            predTeamOpponent={item.predTeamOpponent}
            predType={"Prediction"}
            predTimestamp={utilXtimeAgo(item?.predCreatedAt)}
          />
        ))}
        {loading && <Spinner color={colors4C.purple4C} />}
        {!loading && tabData.length == 0 && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              gap: spacing4C.small4C,
            }}
          >
            <Image
              style={styles.image}
              source={emptyState}
              placeholder={imgBlurHash4C}
              contentFit="cover"
              transition={8}
            />
            <Text
              style={{
                color: colors4C.purple4C,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Start Predicting Now
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
    borderRadius: borderRadius4C.small4C,
  },
});
