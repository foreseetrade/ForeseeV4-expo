import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Tab } from "@rneui/base";
import { colors4C, sizes4C } from "../asthetics";
import { apiGetMatchesByStatus } from "../services/BEApis/match";
import MatchCard from "../appComponents/appCards/MatchCard";
const AllMatchesScreen = (activeTabProp: number) => {
  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      matchId: 1,
      matchNo: 1,
      matchDate: "2024-03-22T17:32:16.000Z",
      matchTeamA: "RCB",
      matchTeamALogoUrl: "https://ik.imagekit.io/quackmagic/teamsLogos/RCB.png",
      matchTeamAScore: "0",
      matchTeamAOvers: "0",
      matchTeamAWickets: "0",
      matchTeamARunRate: "0",
      matchTeamAOdds: "5",
      matchTeamAWinPrecentage: "50",
      matchTeamB: "CSK",
      matchTeamBLogoUrl: "https://ik.imagekit.io/quackmagic/teamsLogos/CSK.png",
      matchTeamBScore: "0",
      matchTeamBOvers: "0",
      matchTeamBWickets: "0",
      matchTeamBRunRate: "0",
      matchTeamBOdds: "5",
      matchVenue: "Chinnaswamy",
      matchSummary: "RCB : CSK - Head to Head : 12 : 12",
      matchStatus: "Upcoming",
      matchToss: "CSK",
      matchWinner: "NONE",
      matchCreatedAt: "2024-03-20T12:05:59.791Z",
      matchUpdatedAt: "2024-03-20T12:05:59.791Z",
      isTrending: true,
      tags: [],
    },
  ]);

  useEffect(() => {
    // Update header name when component mounts
    navigation.setOptions({
      headerTitle: "All Matches",
    });
  }, []);
  const [activeTab, setActiveTab] = useState(activeTabProp);

  const handleTabPress = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const fnGetMatches = (matchStatus: any) => {
    const res = apiGetMatchesByStatus(matchStatus);
    console.log("Res fnGetMatches", res);
  };

  const fnFetchByTab = async () => {
    if (activeTab === 0) {
      fnGetMatches("Live");
    }
    if (activeTab === 1) {
      fnGetMatches("Upcoming");
    }
    if (activeTab === 2) {
      fnGetMatches("Completed");
    }
  };

  useEffect(() => {
    fnFetchByTab();
  }, [activeTab]);

  return (
    <View>
      <Text style={styles.container}>AllMatchesScreen</Text>
      <Tab
        value={activeTab}
        onChange={handleTabPress}
        // disableIndicator
        buttonStyle={{ backgroundColor: "white" }}
        containerStyle={{ backgroundColor: "white" }}
        titleStyle={{ color: colors4C.purple4C, fontSize: 12 }}
        indicatorStyle={{
          backgroundColor: colors4C.purple4C,
          height: 2,
        }}
      >
        <Tab.Item title="Recent" />
        <Tab.Item title="Upcoming" />
        <Tab.Item title="Live" />
      </Tab>

      {/* {activeTab === 0 && (
        <Text style={{ color: colors4C.purple4C, fontSize: 12 }}>Recent</Text>
      )}
      {activeTab === 1 && (
        <Text style={{ color: colors4C.purple4C, fontSize: 12 }}>Upcoming</Text>
      )}
      {activeTab === 2 && (
        <Text style={{ color: colors4C.purple4C, fontSize: 12 }}>Live</Text>
      )} */}
      {data &&
        data.map((data) => (
          <MatchCard
            key={data.matchNo}
            matchNo={data.matchNo}
            matchDate={data.matchDate}
            matchTeamA={data.matchTeamA}
            matchTeamB={data.matchTeamB}
            matchToss={data.matchToss}
            matchStatus={data.matchStatus}
            matchWinner={data.matchWinner}
            matchSummary={data.matchSummary}
            matchTeamALogoUrl={data.matchTeamALogoUrl}
            matchTeamBLogoUrl={data.matchTeamBLogoUrl}
            matchTeamAScore={data.matchTeamAScore}
            matchTeamBScore={data.matchTeamBScore}
            matchTeamAOdds={data.matchTeamAOdds}
            matchTeamBOdds={data.matchTeamBOdds}
            matchTeamAWinPrecentage={data.matchTeamAWinPrecentage}
            matchTeamARunRate={data.matchTeamARunRate}
            matchTeamBRunRate={data.matchTeamBRunRate}
            matchTeamAWickets={data.matchTeamAWickets}
            matchTeamBWickets={data.matchTeamBWickets}
            matchTeamAOvers={data.matchTeamAOvers}
            matchTeamBOvers={data.matchTeamBOvers}
            matchVenue={data.matchVenue}
            matchCreatedAt={data.matchCreatedAt}
            matchUpdatedAt={data.matchUpdatedAt}
            isTrending={data.isTrending}
            tags={data.tags}
          />
        ))}
    </View>
  );
};

export default AllMatchesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
