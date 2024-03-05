import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import NumberPad from "../appComponents/appUtils/NumberPad";
import WalBalanceCard from "../appComponents/appCards/WalBalanceCard";
import { Feather } from "@expo/vector-icons";
import { colors4C, sizes4C } from "../asthetics";

const TopupScreen = () => {
  return (
    <View
      style={{
        backgroundColor: colors4C.white4C,
        flexDirection: "column",
        justifyContent: "space-between",
        gap: sizes4C.small4C,
        padding: sizes4C.medium4C,
      }}
    >
      {/* <Text>TopupScreen</Text> */}
      <WalBalanceCard cardHeight={104} />
      <Text style={styles.textLabel}>
        Enter the amount to withdraw from your Foresee Wallet
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: sizes4C.small4C,
        }}
      >
        <Feather name="info" size={18} color={colors4C.purple4C} />
        <Text style={styles.infoText}>
          Your funds are always safe with us and we value your time and timing{" "}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          // alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
          padding: sizes4C.small4C,
          gap: sizes4C.small4C,
        }}
      >
        <NumberPad />
        {/* <Pressable
          onPress={() => {
            console.log("topup");
          }}
          // color={colors4C.purple4C}
          // title="Topup"
        >
          Topup
        </Pressable> */}
        <TouchableOpacity
          style={{
            backgroundColor: colors4C.purple4C,
            padding: 12,
            borderRadius: sizes4C.small4C,
          }}
          onPress={() => {
            console.log("topup");
          }}
        >
          <Text style={{ color: colors4C.white4C, textAlign: "center" }}>
            Topup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopupScreen;

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 20,
    color: colors4C.blue4C,
    padding: sizes4C.small4C,
  },
  infoText: {
    fontSize: 12,
    color: colors4C.purple4C,
    padding: sizes4C.small4C,
    paddingTop: 0,
  },
});
