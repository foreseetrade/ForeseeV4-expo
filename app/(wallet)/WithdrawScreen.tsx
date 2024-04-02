import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import NumberPad from "../appComponents/appUtils/NumberPad";
import WalBalanceCard from "../appComponents/appCards/WalBalanceCard";
import { colors4C, sizes4C } from "../asthetics";
import { useNavigation } from "expo-router";

const WithDrawScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Update header name when component mounts
    navigation.setOptions({
      headerTitle: "Withdraw",
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <WalBalanceCard cardHeight={88} />
      <Text style={styles.textLabel}>
        Enter the amount to withdraw from your Foresee Wallet
      </Text>
      <View style={styles.infoContainer}>
        <Feather name="info" size={18} color={colors4C.purple4C} />
        <Text style={styles.infoText}>
          Your funds are always safe with us, we value your time and timing
        </Text>
      </View>
      <View style={styles.numberPadContainer}>
        <NumberPad />
        <TouchableOpacity
          style={styles.topupButton}
          onPress={() => {
            console.log("topup");
          }}
        >
          <Text style={styles.buttonText}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: colors4C.light4C,
    gap: sizes4C.small4C,
    padding: sizes4C.medium4C,
  },
  textLabel: {
    fontSize: 20,
    color: colors4C.blue4C,
    padding: sizes4C.small4C,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: sizes4C.small4C,
    // Truncate text
    // flexWrap: "wrap",
  },
  infoText: {
    fontSize: 12,
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

export default WithDrawScreen;
