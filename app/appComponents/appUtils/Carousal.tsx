import { colors4C, imgBlurHash4C, sizes4C } from "@/app/asthetics";
import * as React from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { getImageAds } from "./functions/getImageAds";
import { Image } from "expo-image";

const CarouselComponent = () => {
  const width = Dimensions.get("window").width;

  const adsImagesArr = [
    getImageAds("Ad1"),
    getImageAds("Ad2"),
    getImageAds("Ad3"),
  ];

  return (
    // <View style={{ flex: 1, overflow: "scroll" }}>
    <Carousel
      loop
      width={Number(width - 40)}
      height={104}
      autoPlay={true}
      autoPlayInterval={4000}
      data={adsImagesArr}
      scrollAnimationDuration={1500}
      snapEnabled={true}
      // mode="parallax"
      panGestureHandlerProps={{
        activeOffsetX: [-10, 10],
      }}
      onSnapToItem={(index) => console.log("current index:", index)}
      renderItem={({ index }) => (
        <View
          style={{
            flex: 1,
            borderWidth: 0.2,
            borderRadius: sizes4C.small4C,
            justifyContent: "center",
            backgroundColor: colors4C.lightBlue4C,
            borderColor: colors4C.purple4C,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: sizes4C.small4C,
            }}
            source={getImageAds(`Ad${index + 1}`)}
            placeholder={imgBlurHash4C}
            contentFit="cover"
            transition={1000}
          />
        </View>
      )}
    />
    // </View>
  );
};

export default CarouselComponent;
