import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import WalBalanceCard from "../appComponents/appCards/WalBalanceCard";

import { Link } from "expo-router";
import { borderRadius4C, colors4C, spacing4C } from "../asthetics";
import TransactionCard from "../appComponents/appCards/TransactionCard";
import TranButton from "../appComponents/appButtons/TranButton";
import { Feather } from "@expo/vector-icons";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetItem,
  ActionsheetItemText,
} from "@gluestack-ui/themed";


const WalletScreen = () => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

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
      <WalBalanceCard cardHeight={104} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: spacing4C.small4C,
          width: "100%",
        }}
      >
        <TouchableOpacity onPress={handleClose}>
          <TranButton
            // navigateTo="/(wallet)/TopupScreen"
            btnText="Topup"
            leftIcon={<Feather name="send" size={16} color={colors4C.blue4C} />}
          />
        </TouchableOpacity>
        <TranButton
          navigateTo="/(wallet)/WithdrawScreen"
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
      <View style={{}}>
        <TransactionCard
          tranType="Topup"
          tranStatus="Success"
          tranAmt="4000"
          tranTimestamp="12-12-2022 12:12"
        />
        <TransactionCard
          tranType="Withdraw"
          tranStatus="Pending"
          tranAmt="4000"
          tranTimestamp="12-12-2022 12:12"
        />
        <TransactionCard
          tranType="Topup"
          tranStatus="Failed"
          tranAmt="400000000"
          tranTimestamp="12-12-2022 12:12"
        />
      </View>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent height={"auto"} zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Share</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Play</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Favourite</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({});
