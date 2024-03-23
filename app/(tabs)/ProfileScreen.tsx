import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { colors4C, imgBlurHash4C, sizes4C } from "../asthetics";
import CardWithChevron from "../appComponents/appCards/CardWithChevron";
import { Feather } from "@expo/vector-icons";
import TranButton from "../appComponents/appButtons/TranButton";
import StatButton from "../appComponents/appButtons/StatButton";
import { router } from "expo-router";
import { deleteExpoStorage } from "../services/expo-storage";

const ProfileScreen = () => {
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

  return (
    <>
      <View
        style={{
          // padding: sizes4C.small4C,
          gap: sizes4C.small4C,
          borderRadius: sizes4C.small4C,
        }}
      >
        <View style={styles.imgWrap}>
          <View style={styles.imageBg}>
            <Image
              source={
                "https://s3-alpha-sig.figma.com/img/0c52/bf10/e2be0ba114ea1535d61c8b0b3d69b898?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o1FRC0QVNAN6DuIUFAp3fY690gX3zubvVOS-9E-VlEFyS3L2AxgPDpiiFDnryVzHRz78nWfX-LBd8L7UjlLQmF6X2aZfA2gXVJX9-FysWgjFsXDDdi1-vqPe8D4gzezrkiB1vylAxW67BWD9-VyABfznMro-FwLn4cmV4p7AAeqP3Jlbo-fdnThn-DC595Y1sjb-5yBXej~xVoqq72a6z3SW7EhnOt-YOgNmaIpG2igQ2pnyRBLa94Flm9p6wffZn5L~7jD9xVP1F2NIcu-4oFbKFzDwVcBrraHEQ1TS7kjdsmP-ztx0B8kxgdkRHAydGCwMebO7TepLYMmtuaTqww__"
              }
              placeholder={imgBlurHash4C}
              contentFit="cover"
              transition={8}
              style={styles.imageStyle}
            />

            <Text style={styles.textStyle}>IPhoenix</Text>
            <Text style={styles.textStyle}>
              Igiphoenixtestinglong@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.statButtonContainer}>
          {/* <Text>HomeScreen</Text> */}
          {/* <MatchCard /> */}
          {/* <MatchPredCard winPercentage={75} />  */}
          {/* <NumberPad /> */}
          <StatButton
            navigateTo="(wallet)/AllTransactionsScreen"
            btnStatText={"4200"}
            leftIcon={
              <Feather name="bar-chart" size={16} color={colors4C.blue4C} />
            }
            btnText={"Trades Won"}
            rightIcon={null}
          />
          <StatButton
            btnStatText={"4200"}
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
