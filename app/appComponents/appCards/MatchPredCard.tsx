// import { colors4C, sizes4C } from "@/app/asthetics";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// const MatchPredCard = ({ winPercentage }: { winPercentage: number }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.teamsText}>Win %</Text>

//       <View style={styles.predictionBarOuter}>
//         {" "}
//         {/* Prediction bar should be filled with Win% in Purple and other in gray */}
//         <View
//           style={[
//             styles.predictionBar,
//             { width: `${winPercentage}%`, backgroundColor: colors4C.purple4C },
//           ]}
//         />
//         <View
//           style={[
//             styles.predictionBar,
//             {
//               width: `${100 - winPercentage}%`,
//               backgroundColor: colors4C.gray4C,
//             },
//           ]}
//         />
//       </View>

//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Text style={styles.teamsText}>RCB</Text>
//         <Text style={styles.teamsText}>CSK</Text>
//       </View>

//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Text>₹7</Text>
//         <Text style={styles.teamsText}>ODDS</Text>
//         <Text>₹3</Text>
//       </View>
//     </View>
//   );
// };

// export default MatchPredCard;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "column",
//     borderWidth: 0.3,
//     gap: 8,
//     borderColor: colors4C.gray4C,
//     borderRadius: sizes4C.small4C,
//     padding: sizes4C.small4C,
//     backgroundColor: colors4C.white4C,
//   },
//   predictionBarOuter: {
//     borderWidth: 1,
//     borderColor: colors4C.purple4C,
//     borderRadius: sizes4C.medium4C,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     // padding: sizes4C.small4C,
//   },
//   predictionBar: {
//     width: "50%",
//     borderWidth: 1,
//     borderColor: "red",
//     backgroundColor: colors4C.purple4C,
//     borderRadius: sizes4C.medium4C,
//   },
//   teamsText: {
//     fontSize: 14,
//     fontWeight: "500",
//   },
// });

import { colors4C, sizes4C } from "@/app/asthetics";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MatchPredCard = ({ winPercentage }: { winPercentage: number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamsText}>Win %</Text>

      <View style={styles.predictionBarOuter}>
        <View
          style={[
            styles.predictionBar,
            { width: `${winPercentage}%`, backgroundColor: colors4C.purple4C },
          ]}
        />
        <View
          style={[
            styles.predictionBar,
            {
              width: `${100 - winPercentage}%`,
              backgroundColor: colors4C.white4C,
            },
          ]}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.teamsText}>CSK</Text>
        <Text style={styles.teamsText}>RR</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>₹7</Text>
        <Text style={styles.teamsText}>ODDS</Text>
        <Text>₹3</Text>
      </View>
    </View>
  );
};

export default MatchPredCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderWidth: 0.3,
    gap: 8,
    borderColor: colors4C.gray4C,
    borderRadius: sizes4C.small4C,
    padding: sizes4C.small4C,
    backgroundColor: colors4C.white4C,
  },
  predictionBarOuter: {
    borderWidth: 1,
    borderColor: colors4C.gray4C,
    borderRadius: sizes4C.medium4C,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden", // This ensures that the bars don't overflow the container
  },
  predictionBar: {
    height: 10,
    borderRadius: sizes4C.medium4C,
  },
  teamsText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
