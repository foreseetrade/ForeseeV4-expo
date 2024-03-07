import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { colors4C, sizes4C } from "@/app/asthetics";
import getTeamImageUrl from "../appUtils/functions/getImageUrl";

const TeamLogoCard = ({ teamName }: { teamName: string }) => {
  return (
    <View style={styles.container}>
      <Image source={getTeamImageUrl(`${teamName}Logo`)} style={styles.image} />
    </View>
  );
};

export default TeamLogoCard;

const styles = StyleSheet.create({
  container: {
    padding: sizes4C.medium4C,
    backgroundColor: colors4C.white4C,
    borderRadius: sizes4C.small4C,
    borderWidth: 1,
    borderColor: colors4C.lightBlue4C,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: sizes4C.small4C,
  },
});
