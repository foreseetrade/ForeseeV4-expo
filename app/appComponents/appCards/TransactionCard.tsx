import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  borderRadius4C,
  colors4C,
  imgBlurHash4C,
  sizes4C,
  spacing4C,
} from "@/app/asthetics";

// @ts-ignore
import iconTranFail from "../../../assets/icons/wallet/iconTranFailure.svg";

// @ts-ignore
import iconTranSuccess from "../../../assets/icons/wallet/iconTranSuccess.svg";

// @ts-ignore
import iconTranPending from "../../../assets/icons/wallet/iconTranPending.svg";

const TransactionCard = ({
  tranStatus,
  tranType,
  tranAmt,
  tranTimestamp,
}: {
  tranStatus: string;
  tranType: string;
  tranAmt: string;
  tranTimestamp: string;
}) => {
  return (
    <View
      style={{
        backgroundColor: colors4C.light4C,
        padding: spacing4C.small4C,
        borderBottomWidth: 0.4,
        borderBottomColor: colors4C.purple4C,
        // borderRadius: borderRadius4C.small4C,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: sizes4C.small4C,
          }}
        >
          <Image
            style={styles.image}
            source={
              tranStatus === "Pending"
                ? iconTranPending
                : tranStatus === "Success"
                ? iconTranSuccess
                : iconTranFail
            }
            placeholder={imgBlurHash4C}
            contentFit="cover"
            transition={8}
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Text style={{ fontSize: 14, color: colors4C.gray4C }}>
              {tranType} {tranStatus}
            </Text>
            <Text style={{ ...styles.textStyle, fontSize: 14 }}>
              {tranTimestamp}
            </Text>
          </View>
        </View>
        <Text style={{ ...styles.textStyle, fontWeight: "bold", fontSize: 20 }}>
          ₹ {tranAmt}
        </Text>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: borderRadius4C.small4C,
  },
  textStyle: {
    color: colors4C.blue4C,
  },
});
