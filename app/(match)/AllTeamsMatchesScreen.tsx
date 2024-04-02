import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Skeleton, Tab } from "@rneui/base";
import { colors4C, sizes4C } from "../asthetics";
import {
  apiGetMatchByTeamName,
  apiGetMatchesByStatus,
} from "../services/BEApis/match";
import MatchCard from "../appComponents/appCards/MatchCard";
import { Spinner } from "@gluestack-ui/themed";
import CustomLinearGradient from "../styles/CustomLinearGrad";
import SkelMatchCard from "../appComponents/appSkeletons/SkelMatchCard";

const AllTeamsMatchesScreen = (activeTabProp: number) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState();
  const [teamName, setTeamName] = useState([
    "RCB",
    "DC",
    "MI",
    "KKR",
    "CSK",
    "SRH",
    "PBKS",
    "RR",
    "GT",
    "LSG",
  ]);

  const handleTabPress = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  const fnGetMatches = async () => {
    setLoading(true);

    const res: any = await apiGetMatchByTeamName(teamName[activeTab || 0]);
    console.log("Res fnGetMatches", res);
    setData(res?.data.sort((a: any, b: any) => a.matchNo - b.matchNo));

    setLoading(false);
  };

  useEffect(() => {
    fnGetMatches();
  }, []);

  useEffect(() => {
    fnGetMatches();
  }, [activeTab]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "IPL Teams",
    });
  }, []);

  return (
    <View style={styles.container}>
      <Tab
        scrollable
        value={activeTab || 0}
        onChange={handleTabPress}
        buttonStyle={{ backgroundColor: "white" }}
        containerStyle={{ backgroundColor: "white" }}
        titleStyle={{ color: colors4C.purple4C, fontSize: 12 }}
        indicatorStyle={{
          backgroundColor: colors4C.purple4C,
          height: 2,
        }}
      >
        {teamName.map(
          (item, index) => (
            console.log("item", item),
            (
              <Tab.Item
                key={index}
                title={item.toUpperCase()}
                titleStyle={{ color: colors4C.purple4C, fontSize: 12 }}
              />
            )
          )
        )}
      </Tab>

      <ScrollView>
        {loading && <SkelMatchCard />}
        {!loading &&
          data &&
          data.map((data: any, index) => (
            <View
              key={index}
              style={{ padding: sizes4C.small4C, paddingBottom: 2 }}
            >
              <MatchCard
                matchNo={data.matchNo}
                matchDate={data.matchDate}
                teamA={data.matchTeamA}
                teamB={data.matchTeamB}
                matchStatus={data.matchStatus}
                matchSummary={data.matchSummary}
                showSummary={true}
                showScores={data?.matchStatus === "Live" ? true : false}
                navigateTo={`(match)/${data.matchNo}`}
              />
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default AllTeamsMatchesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: sizes4C.small4C,
  },
});
