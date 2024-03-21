import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Avatar, Button, Input } from "native-base";
import { colors4C } from "../asthetics";
import { useNavigation } from "expo-router";

const EditProfile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Update header name when component mounts
    navigation.setOptions({
      headerTitle: "Trade",
    });
  }, []);

  return (
    <View style={styles.container}>
      <Avatar source={{ uri: "https://i.pravatar.cc/300" }} />
      <Input isReadOnly mx="4" placeholder="Name" w="" />
      <Input
        focusOutlineColor={colors4C.purple4C}
        backgroundColor={colors4C.white4C}
        mx="4"
        placeholder="Username"
        w=""
      />
      <Input mx="4" placeholder="PhoneNumber" w="" />

      <Button bg={colors4C.purple4C} mx="4" w={"100%"}>
        Confirm
      </Button>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flex: 1,
    gap: 16,
    // justifyContent: "center",
    alignItems: "center",
  },
});
