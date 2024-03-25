import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { colors4C, sizes4C } from "../asthetics";
import { useNavigation } from "expo-router";

const EditProfile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Update header name when component mounts
    navigation.setOptions({
      headerTitle: "Edit Profile",
    });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        editable={false}
        placeholder="Name"
        placeholderTextColor={colors4C.gray4C}
        style={styles.textInput}
      />
      <TextInput
        editable={false}
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={colors4C.gray4C}
      />
      <TextInput
        editable={false}
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor={colors4C.gray4C}
      />
      <TextInput
        editable={false}
        style={styles.textInput}
        placeholder="Phone Number"
        placeholderTextColor={colors4C.gray4C}
      />

      <TextInput
        editable={false}
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor={colors4C.gray4C}
      />
      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => {
          console.log("topup");
        }}
      >
        <Text style={styles.primaryBtnText}>Save</Text>
      </TouchableOpacity>

      <Text style={{ color: colors4C.gray4C }}>
        Editing Profile is under development
      </Text>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    gap: 16,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors4C.light4C,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    width: "100%",
    borderColor: colors4C.gray4C,
  },
  primaryBtn: {
    width: "100%",
    backgroundColor: colors4C.purple4C,
    padding: 12,
    borderRadius: sizes4C.small4C,
  },
  primaryBtnText: {
    color: colors4C.white4C,
    textAlign: "center",
  },
});
