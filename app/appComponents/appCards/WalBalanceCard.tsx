import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { borderRadius4C, colors4C, spacing4C } from "@/app/asthetics";
import { StyleSheet } from "react-native";
import { getExpoStorage, setExpoStorage } from "@/app/services/expo-storage";
import { apiGetProfile } from "@/app/services/BEApis/profile";

const WalBalanceCard = ({ cardHeight }: { cardHeight: number }) => {
  const [walBalance, setWalBalance] = useState<any>(0);
  // const getProfileData = async () => {
  //   try {
  //     console.log("getProfileData called in WalBalanceCard");
  //     const storedEmail = await getExpoStorage("localEmail");
  //     const extractedData = storedEmail?.replace(/^"(.*)"$/, "$1");

  //     if (extractedData) {
  //       const res = await apiGetProfile(extractedData);
  //       setExpoStorage("localWalBalance", res?.data?.userWalletBalance);
  //       setWalBalance(res?.data?.userWalletBalance);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching profile data:", error);
  //   }
  // };

  // Run getProfileData every 5s
  // useEffect(() => {
  //   const interval = setInterval(getProfileData, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   getProfileData();
  // }, []);

  const getLocalProfileData = async () => {
    try {
      console.log("getProfileData called");
      const walBalance = await getExpoStorage("localWalBalance");

      if (walBalance) {
        setWalBalance(walBalance);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  // Run getProfileData every 5s
  useEffect(() => {
    const interval = setInterval(getLocalProfileData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors4C.purple4C,
        padding: spacing4C.small4C,
        borderRadius: borderRadius4C.small4C,
        // width: "88%",
        height: cardHeight,
      }}
    >
      <Text style={{ ...styles.textStyle4C, fontSize: 16, paddingVertical: 2 }}>
        Current Balance
      </Text>
      <Text style={styles.textStyle4C}> ₹ {walBalance} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle4C: {
    color: colors4C.light4C,
    fontSize: 24,
  },
});
export default WalBalanceCard;
