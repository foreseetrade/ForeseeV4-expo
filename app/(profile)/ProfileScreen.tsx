import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { colors4C, imgBlurHash4C, sizes4C } from "../asthetics";
import CardWithChevron from "../appComponents/appCards/CardWithChevron";
import { Feather } from "@expo/vector-icons";
import TranButton from "../appComponents/appButtons/TranButton";
import StatButton from "../appComponents/appButtons/StatButton";
import { router } from "expo-router";
import { deleteExpoStorage, getExpoStorage } from "../services/expo-storage";
import { apiGetProfile } from "../services/BEApis/profile";
import ActionSheet from "../appComponents/appCards/ActionSheet";

import { utilRemoveDoubleQuotes } from "../appComponents/appUtils/functions/utilRemoveDoubleQuotes";
import { Spinner } from "@gluestack-ui/themed";

const ProfileScreen = () => {
  // console.log("profileData", profileData);
  const [profileData, setProfileData] = useState<any>();

  const cardData = [
    {
      leftIcon: <Feather name="user" size={16} color={colors4C.blue4C} />,
      rightIcon: (
        <Feather name="chevron-right" size={16} color={colors4C.blue4C} />
      ),
      cardText: "Profile",
      navigateTo: "(profile)/EditProfile",
    },
    // {
    //   leftIcon: <Feather name="settings" size={16} color={colors4C.blue4C} />,
    //   rightIcon: (
    //     <Feather name="chevron-right" size={16} color={colors4C.blue4C} />
    //   ),
    //   cardText: "Settings",
    //   navigateTo: "(wallet)/WithdrawScreen",
    // },
    {
      leftIcon: <Feather name="info" size={16} color={colors4C.blue4C} />,
      rightIcon: (
        <Feather name="chevron-right" size={16} color={colors4C.blue4C} />
      ),
      cardText: "App Info",
      navigateTo: "(profile)/AppInfoScreen",
    },
    {
      leftIcon: <Feather name="book" size={16} color={colors4C.blue4C} />,
      rightIcon: (
        <Feather name="chevron-right" size={16} color={colors4C.blue4C} />
      ),
      cardText: "FAQs",
      navigateTo: "(profile)/FaqsScreen",
    },
    {
      leftIcon: <Feather name="log-out" size={16} color={colors4C.blue4C} />,
      rightIcon: (
        <Feather name="chevron-right" size={16} color={colors4C.blue4C} />
      ),
      cardText: "Logout",
      navigateTo: "(auth)/GoogleLogin",
    },
  ];

  const fnGetProfile = async () => {
    // const storedEmail = await getExpoStorage("localEmail");
    // console.log("storedEmail", storedEmail);

    // // Removing double quotes and extracting data between them
    // const extractedData = storedEmail?.replace(/^"(.*)"$/, "$1");
    // console.log("extractedData", extractedData);

    // const res = await apiGetProfile(extractedData || "");
    // console.log("Res fnGetProfile", res?.data);
    // setProfileData(res?.data);

    const localEmail = await getExpoStorage("localEmail");
    const localWalBalance = await getExpoStorage("localWalBalance");
    const localPfpUrl = await getExpoStorage("localPfpUrl");
    const localName = await getExpoStorage("localName");
    const localUserWins = await getExpoStorage("localUserWins");

    setProfileData({
      userName: utilRemoveDoubleQuotes(localName || "") || "",
      userPfpUrl: utilRemoveDoubleQuotes(localPfpUrl || "") || "",
      userEmail: utilRemoveDoubleQuotes(localEmail || "") || "",
      userWalletBalance: utilRemoveDoubleQuotes(localWalBalance || "") || "",
      userWins: utilRemoveDoubleQuotes(localUserWins || "") || "",
    });

    console.log("profileData", profileData);
  };

  // Run it every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      fnGetProfile();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fnGetProfile();
  }, []);

  return (
    <>
      <View
        style={{
          // padding: sizes4C.small4C,
          gap: sizes4C.small4C,
          borderRadius: sizes4C.small4C,
        }}
      >
        {!profileData && <Spinner color={colors4C.purple4C} />}
        {profileData && (
          <>
            <View style={styles.imgWrap}>
              <View style={styles.imageBg}>
                <Image
                  source={
                    profileData?.userPfpUrl
                      ? { uri: profileData?.userPfpUrl }
                      : imgBlurHash4C
                  }
                  placeholder={imgBlurHash4C}
                  contentFit="cover"
                  transition={8}
                  style={styles.imageStyle}
                />

                <Text style={styles.textStyle}>{profileData?.userName}</Text>
                <Text style={styles.textStyle}>{profileData?.userEmail}</Text>
              </View>
            </View>
          </>
        )}
        <View style={styles.statButtonContainer}>
          {/* <Text>HomeScreen</Text> */}
          {/* <MatchCard /> */}
          {/* <MatchPredCard winPercentage={75} />  */}
          {/* <NumberPad /> */}
          <StatButton
            navigateTo="(wallet)/AllTransactionsScreen"
            btnStatText={profileData?.userWins}
            leftIcon={
              <Feather name="bar-chart" size={16} color={colors4C.blue4C} />
            }
            btnText={"Trades Won"}
            rightIcon={null}
          />
          <StatButton
            btnStatText={profileData?.userWalletBalance}
            navigateTo="(wallet)/"
            leftIcon={
              <Feather name="credit-card" size={16} color={colors4C.blue4C} />
            }
            btnText={"Wallet Balance"}
            rightIcon={null}
          />
        </View>
        <View style={styles.chevronsContainer}>
          {cardData.map((data, index) => (
            <CardWithChevron
              key={index}
              leftIcon={data.leftIcon}
              rightIcon={data.rightIcon}
              cardText={data.cardText}
              navigateTo={data.navigateTo}
            />
          ))}
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imgWrap: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: colors4C.purple4C,
    marginBottom: -48,
    // padding: sizes4C.small4C,
    // borderRadius: sizes4C.small4C,
  },
  imageStyle: { width: 80, height: 80, borderRadius: 360 },
  textStyle: { color: colors4C.white4C, fontSize: 14 },
  imageBg: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: sizes4C.small4C,
    height: 240,
    // borderRadius: sizes4C.small4C,
  },
  statButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // gap: ,
    padding: sizes4C.small4C,
    // backgroundColor: "red",
    // borderWidth: 0.4,
    borderColor: colors4C.purple4C,
    borderRadius: sizes4C.small4C,
  },
  chevronsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: sizes4C.small4C,
    paddingHorizontal: sizes4C.small4C,
  },
});
