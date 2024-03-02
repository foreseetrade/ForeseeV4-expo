import { Link, useNavigation, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Href } from "expo-router";

const SectionHeader = ({
  headingName,
  navigateTo,
}: {
  headingName: string;
  navigateTo: string;
}) => {
  const router = useRouter();

  return (
    <View>
      <Text>{headingName}</Text>
      {/* <Link href={`${navigateTo}` as Href<string>} asChild> */}{" "}
      <Pressable
        onPress={() => {
          // router.push({
          //   pathname: navigateTo
          // });
        }}
      >
        see all
      </Pressable>
      {/* </Link> */}
    </View>
  );
};

export default SectionHeader;
const styles = StyleSheet.create({});
