import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Card, Divider, Input, InputField } from "@gluestack-ui/themed";
import { colors4C, sizes4C } from "@/app/asthetics";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { getExpoStorage } from "@/app/services/expo-storage";
import { apiNewWithdraw } from "@/app/services/BEApis/withdraw";

const WithdrawCard = () => {
  const [withdrawDetails, setwithdrawDetails] = useState({
    withdrawAmount: "",
    withdrawRefId: "",
    withdrawAppName: "",
    withdrawPhoneNumber: "",
    withdrawBankingName: "",
  });

  const handleWithdraw = async () => {
    console.log(withdrawDetails);
    const localUserId = await getExpoStorage("localUserId");

    const res = await apiNewWithdraw({
      withdrawUserId: parseInt(localUserId || "", 10),
      withdrawAmount: parseInt(withdrawDetails.withdrawAmount, 10),
      withdrawStatus: "Pending",
      withdrawPhNumber: withdrawDetails.withdrawPhoneNumber,
      withdrawUpiId: withdrawDetails.withdrawRefId,
      withdrawBankingName: withdrawDetails.withdrawBankingName,
    });
    console.log("Res handleWithdraw", res?.data);
  };

  const handleInputChange = (name: string, value: string) => {
    console.log(name, value);
    setwithdrawDetails({ ...withdrawDetails, [name]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Withdraw from your Foresee Wallet</Text>
      <Text style={styles.subTitle}>
        Fill in the details to request your Withdraw
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Banking Name :
          <Text style={{ fontWeight: "bold", marginRight: 4 }}> Foresee </Text>
          <Feather name="copy" size={12} color={colors4C.blue4C} />
        </Text>
        <Text style={styles.cardText}>
          Account Number :{" "}
          <Text style={{ fontWeight: "bold", marginRight: 4 }}>
            1234567890{" "}
          </Text>
          <Feather name="copy" size={12} color={colors4C.blue4C} />
        </Text>
        <Text style={styles.cardText}>
          IFSC Code : <Text style={{ fontWeight: "bold" }}>HDFC0001234 </Text>
          <Feather name="copy" size={12} color={colors4C.blue4C} />
        </Text>
      </View>

      <Divider my="$0.5" />

      <Input
        borderColor={colors4C.purple4C}
        borderRadius={sizes4C.small4C}
        variant="outline"
        size="sm"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          value={withdrawDetails.withdrawAmount}
          onChange={(e) =>
            handleInputChange("withdrawAmount", e?.nativeEvent?.text)
          }
          placeholder="Enter the Amount"
        />
      </Input>
      <Input
        borderColor={colors4C.purple4C}
        borderRadius={sizes4C.small4C}
        variant="outline"
        size="sm"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          onChange={(e) =>
            handleInputChange("withdrawRefId", e?.nativeEvent?.text)
          }
          value={withdrawDetails.withdrawRefId}
          placeholder="Enter UPI / any Reference ID"
        />
      </Input>
      <Input
        borderColor={colors4C.purple4C}
        borderRadius={sizes4C.small4C}
        variant="outline"
        size="sm"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          onChange={(e) =>
            handleInputChange("withdrawAppName", e?.nativeEvent?.text)
          }
          value={withdrawDetails.withdrawAppName}
          placeholder="Enter the UPI / Transacted App Name"
        />
      </Input>
      <Input
        borderColor={colors4C.purple4C}
        borderRadius={sizes4C.small4C}
        variant="outline"
        size="sm"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          onChange={(e) =>
            handleInputChange("withdrawPhoneNumber", e?.nativeEvent?.text)
          }
          value={withdrawDetails.withdrawPhoneNumber}
          placeholder="Enter the Phone Number"
        />
      </Input>
      <Input
        borderColor={colors4C.purple4C}
        borderRadius={sizes4C.small4C}
        variant="outline"
        size="sm"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          onChange={(e) =>
            handleInputChange("withdrawBankingName", e?.nativeEvent?.text)
          }
          value={withdrawDetails.withdrawBankingName}
          placeholder="Enter your Banking Name"
        />
      </Input>
      <TouchableOpacity style={styles.primaryBtn} onPress={handleWithdraw}>
        <Text style={styles.primaryBtnText}>Withdraw</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WithdrawCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // flex: 1,
    flexDirection: "column",
    gap: sizes4C.small4C,
    padding: sizes4C.small4C,
    marginVertical: sizes4C.small4C,
  },
  card: {
    flexDirection: "column",
    gap: sizes4C.small4C,
    padding: sizes4C.small4C,
    backgroundColor: colors4C.lightBlue4C,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderRadius: sizes4C.small4C,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "400",
    color: colors4C.blue4C,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors4C.purple4C,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: "400",
    color: colors4C.blue4C,
  },
  primaryBtn: {
    width: "100%",
    backgroundColor: colors4C.purple4C,
    padding: 8,
    borderRadius: sizes4C.small4C,
  },
  primaryBtnText: {
    color: colors4C.white4C,
    textAlign: "center",
  },
});
