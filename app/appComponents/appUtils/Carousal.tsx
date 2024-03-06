import { colors4C, sizes4C } from "@/app/asthetics";
import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const CarouselComponent = () => {
  const width = Dimensions.get("window").width;

  return (
    // <View style={{ flex: 1, overflow: "scroll" }}>
    <Carousel
      loop
      width={Number(width - 40)}
      height={104}
      autoPlay={true}
      autoPlayInterval={4000}
      data={[...new Array(6).keys()]}
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
          <Text style={{ textAlign: "center", fontSize: 24 }}>{index}</Text>
        </View>
      )}
    />
    // </View>
  );
};

export default CarouselComponent;
