import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NumberPad from "../appComponents/appUtils/NumberPad";
import WalBalanceCard from "../appComponents/appCards/WalBalanceCard";
import { Feather } from "@expo/vector-icons";
import { colors4C } from "../asthetics";

const WithdrawScreen = () => {
  return (
    <View>
      {/* <Text>WithdrawScreen</Text> */}
      <WalBalanceCard cardHeight={104} />
      <Text style={styles.textLabel}>
        Enter the amount to Topup to your Foresee Wallet
      </Text>
      <View>
        <Feather name="info" size={16} color={colors4C.purple4C} />
        <Text style={styles.infoText}>
          Your funds are always safe with us and we value your time and timing
        </Text>
      </View>
      <NumberPad />
    </View>
  );
};

export default WithdrawScreen;

const styles = StyleSheet.create({
  textLabel: {
    color: colors4C.blue4C,
  },
  infoText: {
    color: colors4C.purple4C,
  },
});
