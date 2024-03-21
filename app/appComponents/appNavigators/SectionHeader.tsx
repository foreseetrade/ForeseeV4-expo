import { Link, useNavigation, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Href } from "expo-router";
import { colors4C, sizes4C } from "@/app/asthetics";
import { Feather } from "@expo/vector-icons";

const SectionHeader = ({
  headingName,
  navigateTo,
}: {
  headingName: string;
  navigateTo: string;
}) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: navigateTo as Href<string>,
        });

        // navigation.navigate(navigateTo);
      }}
    >
      <View style={styles.container}>
        <Text style={{ color: colors4C.blue4C }}>{headingName}</Text>

        {/* See all */}
        <Feather name="chevron-right" size={16} color={colors4C.blue4C} />
      </View>
    </Pressable>
  );
};

export default SectionHeader;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: sizes4C.medium4C,
    paddingHorizontal: 4,
    gap: sizes4C.small4C,
  },
});
