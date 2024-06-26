import { Pressable, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Image } from "expo-image";
import FeatherIcon from "@expo/vector-icons/Feather";
import {
  colors4C,
  imgBlurHash4C,
  imgPlaceholderBlackWhite,
} from "../asthetics";
import { View } from "@/components/Themed";
import { Href, Link, router } from "expo-router";
import { apiGetProfile } from "../services/BEApis/profile";
import { getExpoStorage, setExpoStorage } from "../services/expo-storage";

const AppTopBar4C = ({ isNumbersVisible }: { isNumbersVisible: boolean }) => {
  const insets = useSafeAreaInsets();

  const [profileData, setProfileData] = useState<any>(null);
  const [localData, setLocalData] = useState<any>({
    localWalBalance: null,
    localPfpUrl: null,
    localName: null,
    localUserWins: null,
    localEmail: null,
    localUserId: null,
  });

  const getProfileData = async () => {
    try {
      console.log("getProfileData called in AppTopBar4C");
      const storedEmail = await getExpoStorage("localEmail");
      const extractedData = storedEmail?.replace(/^"(.*)"$/, "$1");

      if (extractedData) {
        const res = await apiGetProfile(extractedData);
        setProfileData(res?.data);
        setExpoStorage("localWalBalance", res?.data?.userWalletBalance);
        setExpoStorage("localPfpUrl", res?.data?.userPfpUrl);
        setExpoStorage("localName", res?.data?.userName);
        setExpoStorage("localUserWins", res?.data?.userWins);
        setExpoStorage("localEmail", res?.data?.userEmail);
        setExpoStorage("localUserId", res?.data?.userId);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const getLocalProfileData = async () => {
    try {
      const walBalance = await getExpoStorage("localWalBalance");
      const pfpUrl = await getExpoStorage("localPfpUrl");
      const name = await getExpoStorage("localName");
      const userWins = await getExpoStorage("localUserWins");
      setLocalData({
        userWalletBalance: walBalance,
        userPfpUrl: pfpUrl,
        userName: name,
        userWins: userWins,
      });
    } catch (error) {
      console.error("Error fetching Local profile data:", error);
    }
  };

  // Run getProfileData every 5s
  useEffect(() => {
    const interval = setInterval(getProfileData, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getProfileData();
    getLocalProfileData();
  }, []);

  return (
    <Pressable
      style={{
        ...styles.topBar,
        paddingTop: insets.top + 8,
        paddingHorizontal: 16,
        paddingBottom: 8,
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <Pressable
          onPress={() => {
            router.navigate("/(screeens)/ProfileScreen");
          }}
        > */}
        <Link href={"/(tabs)/ProfileScreenWrap" as Href<string>}>
          <Image
            style={styles.image}
            source={
              localData?.userPfpUrl || profileData?.userPfpUrl
                ? profileData?.userPfpUrl
                : imgPlaceholderBlackWhite
            }
            placeholder={imgPlaceholderBlackWhite}
            contentFit="cover"
            transition={1000}
          />
        </Link>
        {/* </Pressable> */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          {isNumbersVisible && (
            <Pressable
              onPress={() => {
                router.push("/(tabs)/WalletScreen");
              }}
              style={{
                backgroundColor: colors4C.lightBlue4C,
                padding: 4,
                paddingHorizontal: 8,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: colors4C.blue4C,
                }}
              >
                ₹{profileData?.userWalletBalance}
              </Text>
              <FeatherIcon
                name="credit-card"
                size={22}
                color={colors4C.blue4C}
              />
            </Pressable>
          )}
          {!isNumbersVisible && (
            <Pressable
              onPress={() => {
                router.push("/(tabs)/WalletScreen");
              }}
            >
              <FeatherIcon
                name="credit-card"
                size={22}
                color={colors4C.blue4C}
              />
            </Pressable>
          )}
          <Pressable>
            <FeatherIcon name="bell" size={22} color={colors4C.blue4C} />
          </Pressable>
        </Pressable>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: colors4C.light4C,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    // gap: 8,
  },
  flexColumn: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 360,
  },
});

export default AppTopBar4C;
