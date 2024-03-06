import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

function Index() {
  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1, overflow: "scroll" }}>
      <Carousel
        loop
        width={width}
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
              borderWidth: 0.4,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 24 }}>{index}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Index;
