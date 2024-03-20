import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { apiGetMatchByMatchNo } from "../services/BEApis/match";

const MatchPage = () => {
  const { matchId } = useLocalSearchParams();

  const fnGetMatchByMatchNo = async () => {
    console.log(matchId);
    const res = await apiGetMatchByMatchNo(matchId);
    console.log("Res fnGetMatchByMatchNo", res);
  };

  useEffect(() => {
    fnGetMatchByMatchNo();
  }, [matchId]);

  return (
    <View>
      <Text>MatchPage {matchId}</Text>
    </View>
  );
};

export default MatchPage;

const styles = StyleSheet.create({});
