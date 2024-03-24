import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Href, Link, router } from "expo-router";
import { colors4C, sizes4C } from "@/app/asthetics";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetItem,
  ActionsheetItemText,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import TopupCard from "../appCards/TopupCard";
import WithdrawCard from "../appCards/WithdrawCard";

const TranButton = ({ navigateTo, btnText, leftIcon, rightIcon, scope }: any) => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          if (navigateTo) {
            router.push({ pathname: navigateTo as Href<string> });
          } else {
            setShowActionsheet(!showActionsheet);
          }
        }}
      >
        <>
          <View style={styles.btnWrap}>
            {/* <Image source={leftIcon} /> */}
            {leftIcon}
            <View
              style={{
                flexDirection: "column",
                gap: 8,
                alignItems: "center",
              }}
            >
              <Text style={styles.textStyle}>{btnText}</Text>
            </View>
            {/* <Image source={rightIcon} /> */}
            {rightIcon}
          </View>
        </>

        <Actionsheet
          isOpen={showActionsheet}
          onClose={handleClose}
          zIndex={999}
        >
          <ActionsheetBackdrop />
          <ActionsheetContent height={"auto"} zIndex={999}>
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            {scope === "topup" && <TopupCard />}
            {scope === "withdraw" && <WithdrawCard />}
          </ActionsheetContent>
        </Actionsheet>
      </TouchableOpacity>
    </>
  );
};

export default TranButton;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "400",
    fontSize: 12,
    color: colors4C.blue4C,
  },
  btnWrap: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: sizes4C.small4C,
    alignItems: "center",
    padding: sizes4C.small4C,
    backgroundColor: colors4C.light4C,
    borderWidth: 0.4,
    borderColor: colors4C.purple4C,
    borderRadius: sizes4C.small4C,
    // width: Dimensions.get("screen").width / 4,
    width: 104, //Best
    // fill the container width
    // width: "100%",
  },
});
