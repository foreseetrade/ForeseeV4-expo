import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import WalBalanceCard from "../appComponents/appCards/WalBalanceCard";

import { Link } from "expo-router";

const WalletScreen = () => {
  return (
    <View>
      {/* <Text>WalletScreen</Text> */}
      <WalBalanceCard />
      <Link href="/(wallet)/AllTransactionsScreen" asChild>
        <Pressable>
          <Text>All Transactions</Text>
          <Text>See All</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({});
