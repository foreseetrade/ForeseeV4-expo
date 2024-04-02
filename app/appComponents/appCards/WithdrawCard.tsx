import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Card,
  Divider,
  Input,
  InputField,
  Spinner,
} from "@gluestack-ui/themed";
import { colors4C, sizes4C } from "@/app/asthetics";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { getExpoStorage } from "@/app/services/expo-storage";
import { apiNewWithdraw } from "@/app/services/BEApis/withdraw";
import FeedbackScreen from "@/app/(wallet)/FeedbackScreen";

const WithdrawCard = () => {
  const [withdrawDetails, setwithdrawDetails] = useState({
    withdrawAmount: "",
    withdrawRefId: "",
    withdrawAppName: "",
    withdrawPhoneNumber: "",
    withdrawBankingName: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [withdrawStatus, setWithdrawStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stIsSuccess, setStIsSuccess] = useState(false);

  const handleWithdraw = async () => {
    setLoading(true);
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

    if (res.status > 200) {
      setLoading(false);
      setWithdrawStatus(true);
      setStIsSuccess(true);
      setFeedbackMessage(
        "Withdraw Requested. Please wait for confirmation from our team"
      );
    } else {
      setWithdrawStatus(false);
      setStIsSuccess(false);
      setFeedbackMessage("Withdraw Request Failed. Please try again later");
    }

    setLoading(false);
  };

  const handleInputChange = (name: string, value: string) => {
    console.log(name, value);
    setwithdrawDetails({ ...withdrawDetails, [name]: value });
  };

  return (
    <>
      {!withdrawStatus && !loading && (
        <>
          <View style={styles.container}>
            <Text style={styles.title}> Withdraw from your Foresee Wallet</Text>
            <Text style={styles.subTitle}>
              Fill in the details to request your Withdraw
            </Text>

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
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={handleWithdraw}
            >
              <Text style={styles.primaryBtnText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {withdrawStatus && !loading && (
        <View style={styles.feedbackContainer}>
          <FeedbackScreen isSuccess={stIsSuccess} feedbackText={feedbackMessage} />
        </View>
      )}

      {loading && <Spinner color={colors4C.purple4C} />}
    </>
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
  feedbackContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: colors4C.light4C,
    padding: sizes4C.small4C,
    borderRadius: sizes4C.small4C,
  },
  feedbackText: {
    fontSize: 16,
    color: colors4C.blue4C,
    padding: sizes4C.small4C,
    paddingBottom: 0,
  },
});
