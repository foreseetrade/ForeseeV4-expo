import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";

const AppInfoScreen = () => {
  const navigation = useNavigation();
  


  
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "App Information",
    });
  }, []);

  return (
    <View>
      <Text>AppInfoScreen</Text>
    </View>
  );
};

export default AppInfoScreen;

const styles = StyleSheet.create({});
