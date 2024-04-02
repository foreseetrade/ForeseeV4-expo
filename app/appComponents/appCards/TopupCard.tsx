import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Card,
  Divider,
  Input,
  InputField,
  Spinner,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  useToast,
} from "@gluestack-ui/themed";
import { colors4C, sizes4C } from "@/app/asthetics";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { apiNewTopup } from "@/app/services/BEApis/topup";
import { getExpoStorage } from "@/app/services/expo-storage";
import FeedbackScreen from "@/app/(wallet)/FeedbackScreen";

// @ts-ignore
// import { Clipboard } from "@react-native-clipboard/clipboard";

const TopupCard = ({ handleClose }: { handleClose: Function }) => {
  const [topupDetails, setTopupDetails] = useState({
    topupAmount: "",
    topupRefId: "",
    topupAppName: "",
    topupPhoneNumber: "",
    topupBankingName: "",
    topupInAppUsername: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [topupStatus, setTopupStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stIsSuccess, setStIsSuccess] = useState(false);
  // const toast = useToast();

  const handleTopup = async () => {
    setLoading(true);
    console.log(topupDetails);
    const localUserId = await getExpoStorage("localUserId");

    const res = await apiNewTopup({
      topupUserId: parseInt(localUserId || "", 10),
      topupAmount: topupDetails.topupAmount,
      topupRefId: topupDetails.topupRefId,
      topupAppName: topupDetails.topupAppName,
      topupPhNumber: topupDetails.topupPhoneNumber,
      topupBankingName: topupDetails.topupBankingName,
      topupInappUserName: topupDetails.topupInAppUsername,
    });
    console.log("Res handleTopup", res);

    if (res.status > 200) {
      setLoading(false);
      setTopupStatus(true);
      setFeedbackMessage(
        "Topup Requested. Please wait for confirmation from Foresee team"
      );
      setStIsSuccess(true);
      return;
    } else {
      setLoading(false);
      setTopupStatus(false);
      setStIsSuccess(false);
      setFeedbackMessage("Topup Request Failed. Please try again later");
      return;
    }
  };

  const handleInputChange = (name: string, value: string) => {
    console.log(name, value);
    setTopupDetails({ ...topupDetails, [name]: value });
  };

  return (
    <>
      {!topupStatus && !loading && (
        <>
          <View style={styles.container}>
            <Text style={styles.title}>Topup your Foresee Wallet</Text>
            <Text style={styles.subTitle}>
              Please make the payment to the following Details and Fill the form
              to request for Topup
            </Text>
            <View style={styles.card}>
              <Text
                style={styles.cardText}
                onPress={() => {
                  // copy to clipboard
                  // Clipboard.setString("CODE4AI TECH PVT LTD");
                  // showToast();
                }}
              >
                Banking Name :
                <Text style={{ fontWeight: "bold", marginRight: 4 }}>
                  {" "}
                  CODE4AI TECH PVT LTD{" "}
                </Text>
                <Feather name="copy" size={12} color={colors4C.blue4C} />
              </Text>
              <Text
                style={styles.cardText}
                onPress={() => {
                  // copy to clipboard
                  // Clipboard.setString("200002523497");
                  // showToast();
                }}
              >
                Account Number :{" "}
                <Text style={{ fontWeight: "bold", marginRight: 4 }}>
                  200002523497{" "}
                </Text>
                <Feather name="copy" size={12} color={colors4C.blue4C} />
              </Text>
              <Text
                style={styles.cardText}
                onPress={() => {
                  // copy to clipboard
                  // Clipboard.setString("ESFB0003034");
                  // showToast();
                }}
              >
                IFSC Code :{" "}
                <Text style={{ fontWeight: "bold" }}>ESFB0003034 </Text>
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
                value={topupDetails.topupAmount}
                onChange={(e) =>
                  handleInputChange("topupAmount", e?.nativeEvent?.text)
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
                  handleInputChange("topupRefId", e?.nativeEvent?.text)
                }
                value={topupDetails.topupRefId}
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
                  handleInputChange("topupAppName", e?.nativeEvent?.text)
                }
                value={topupDetails.topupAppName}
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
                  handleInputChange("topupPhoneNumber", e?.nativeEvent?.text)
                }
                value={topupDetails.topupPhoneNumber}
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
                  handleInputChange("topupBankingName", e?.nativeEvent?.text)
                }
                value={topupDetails.topupBankingName}
                placeholder="Enter your Banking Name"
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
                  handleInputChange("topupInAppUsername", e?.nativeEvent?.text)
                }
                value={topupDetails.topupInAppUsername}
                placeholder="Enter your Name as in the App"
              />
            </Input>
            <TouchableOpacity style={styles.primaryBtn} onPress={handleTopup}>
              <Text style={styles.primaryBtnText}>Topup</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {topupStatus && !loading && (
        <View
          style={{
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <FeedbackScreen
            handleClose={handleClose}
            isSuccess={stIsSuccess}
            feedbackText={feedbackMessage}
          />
        </View>
      )}

      {loading && <Spinner color={colors4C.purple4C} />}
    </>
  );
};

export default TopupCard;

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
    backgroundColor: colors4C.green4C,
    padding: sizes4C.small4C,
    borderRadius: sizes4C.small4C,
    marginVertical: sizes4C.small4C,
  },
  feedbackText: {
    color: colors4C.white4C,
    textAlign: "left",
  },
});
