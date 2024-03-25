import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PredictionCard from "../appComponents/appCards/PredictionCard";
import { borderRadius4C, colors4C, spacing4C } from "../asthetics";
import { useNavigation } from "expo-router";
import { apiGetUserTopups } from "../services/BEApis/topup";
import { Tab } from "@rneui/base";
import { getExpoStorage } from "../services/expo-storage";
import { utilRemoveDoubleQuotes } from "../appComponents/appUtils/functions/utilRemoveDoubleQuotes";
import TransactionCard from "../appComponents/appCards/TransactionCard";
import { apiGetUserWithdraws } from "../services/BEApis/withdraw";
import { utilXtimeAgo } from "../appComponents/appUtils/functions/utilXtimeAgo";
import { apiGetPredictions } from "../services/BEApis/prediction";

const AllTransactionsScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const [tabName, setTabName] = useState(["Topup", "Withdraw", "Trades"]);

  const [tabData, setTabData] = useState([]);

  const handleTabPress = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  const predictions = [
    {
      predAmt: "1000",
      predStatus: "Pending",
      predTeams: ["DC", "CSK"],
      predType: "Foresee",
      predTimestamp: "2 hours ago",
    },
  ];

  const fnGetHistory = async () => {
    const storedUserId = await getExpoStorage("localUserId");
    const storedEmail = await getExpoStorage("localEmail");
    console.log("storedUserId", storedUserId);

    if (activeTab == 0) {
      const res = await apiGetUserTopups(parseInt(storedUserId || "", 10));
      console.log("Res Topups", res?.data);

      setTabData(res?.data);
    }

    if (activeTab == 1) {
      console.log("Withdrawals");

      const res = await apiGetUserWithdraws(
        parseInt(utilRemoveDoubleQuotes(storedUserId || ""), 10)
      );
      console.log("Res Withdrawals", res?.data);

      setTabData(res?.data);
    }

    if (activeTab == 2) {
      console.log("Trades");

      const res = await apiGetPredictions(storedEmail as string);
      console.log("Res GetPredictions", res?.data);

      setTabData(res?.data);
    }
  };

  useEffect(() => {
    fnGetHistory();
  }, [activeTab]);

  useEffect(() => {
    // Update header name when component mounts
    navigation.setOptions({
      headerTitle: "History",
    });
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Tab
          value={activeTab || 0}
          onChange={handleTabPress}
          buttonStyle={{ backgroundColor: "white" }}
          containerStyle={{ backgroundColor: "white", width: "100%" }}
          titleStyle={{ color: colors4C.purple4C, fontSize: 12 }}
          indicatorStyle={{
            backgroundColor: colors4C.purple4C,
            height: 2,
          }}
        >
          {tabName.map(
            (item, index) => (
              console.log("item", item),
              (
                <Tab.Item
                  key={index}
                  title={item}
                  titleStyle={{ color: colors4C.purple4C, fontSize: 12 }}
                />
              )
            )
          )}
        </Tab>

        {activeTab === 0 &&
          tabData.map((item: any, index: any) => (
            <TransactionCard
              key={index}
              tranStatus={item?.topupStatus}
              tranType="Topup"
              tranAmt={item?.topupAmount}
              tranTimestamp={utilXtimeAgo(item?.topupCreatedAt).toString()}
            />
          ))}

        {activeTab === 1 &&
          tabData.map((item: any, index: any) => (
            <TransactionCard
              key={index}
              tranStatus={item?.withdrawStatus}
              tranType="Withdraw"
              tranAmt={item?.withdrawAmount}
              tranTimestamp={utilXtimeAgo(item?.withdrawCreatedAt)}
            />
          ))}

        {activeTab === 2 &&
          tabData.map((item: any, index: any) => (
            <PredictionCard
              key={index}
              predAmt={item.predTotalValue}
              predStatus={item.predStatus}
              predTeam={item.predTeamName}
              predType={"Prediction"}
              predTimestamp={utilXtimeAgo(item?.predCreatedAt)}
            />
          ))}
      </View>
    </>
  );
};

export default AllTransactionsScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // alignItems: "center",
    // paddingHorizontal: spacing4C.small4C,
    width: "100%",
  },
});
