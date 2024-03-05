import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import WalBalanceCard from "../appComponents/appCards/WalBalanceCard";

import { Link } from "expo-router";
import { borderRadius4C, colors4C, spacing4C } from "../asthetics";
import TransactionCard from "../appComponents/appCards/TransactionCard";
import TranButton from "../appComponents/appButtons/TranButton";
import { Feather } from "@expo/vector-icons";

const WalletScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        gap: spacing4C.medium4C,
        padding: spacing4C.medium4C,
        width: "100%",
      }}
    >
      {/* <Text>WalletScreen</Text> */}
      <WalBalanceCard />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: spacing4C.small4C,
          width: "100%",
        }}
      >
        <TranButton
          btnText="Topup"
          leftIcon={<Feather name="send" size={16} color={colors4C.blue4C} />}
        />
        <TranButton
          btnText="Withdraw"
          leftIcon={
            <Feather name="arrow-down" size={16} color={colors4C.blue4C} />
          }
        />
        <TranButton
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
      <View style={{}}>
        <TransactionCard
          tranType="Topup"
          tranStatus="Success"
          tranAmt="4000"
          tranTimestamp="12-12-2022 12:12"
        />
        <TransactionCard
          tranType="Topup"
          tranStatus="Success"
          tranAmt="4000"
          tranTimestamp="12-12-2022 12:12"
        />
        <TransactionCard
          tranType="Topup"
          tranStatus="Success"
          tranAmt="4000"
          tranTimestamp="12-12-2022 12:12"
        />
      </View>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({});
