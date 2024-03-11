import { StyleSheet, Text, View } from "react-native";
import React from "react";
import successAnimation from "../../assets/animations/wallet/success.json";

import LottieView from "lottie-react-native";

const SuccessScreen = ({
  successText = "Trade on CSK Successful",
  failureText,
}: any) => {
  return (
    <View>
      {successText && (
        <>
          <LottieView source={successAnimation} autoPlay loop />
          {/* {successText} */}
          "Trade on CSK Successful"
        </>
      )}

      {/* {failureText && (
        <>
          Error/failed https://lottiefiles.com/animations/errorfailed-vlDX9wiv4J via @LottieFiles 
          <LottieView source={animationData} autoPlay loop />
          {failureText}
        </>
      )} */}
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({});
