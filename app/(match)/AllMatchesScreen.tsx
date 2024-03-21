import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Tab } from "@rneui/base";
import { colors4C, sizes4C } from "../asthetics";
import { apiGetMatchesByStatus } from "../services/BEApis/match";
import MatchCard from "../appComponents/appCards/MatchCard";
const AllMatchesScreen = (activeTabProp: number) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const fnGetMatches = async (matchStatus: any) => {
    setLoading(true);

    const res: any = await apiGetMatchesByStatus(matchStatus);
    console.log("Res fnGetMatches", res);
    setData(res?.data.sort((a: any, b: any) => a.matchNo - b.matchNo));

    setLoading(false);
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
    <View style={styles.container}>
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
        <Tab.Item title="Live" />
        <Tab.Item title="Upcoming" />
        <Tab.Item title="Completed" />
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
      {loading && <Text>Loading...</Text>}
      {!loading && data &&
        data.map((data: any, index) => (
          <View
            key={index}
            style={{ padding: sizes4C.small4C, paddingBottom: 4 }}
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
    </View>
  );
};

export default AllMatchesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: sizes4C.small4C,
  },
});
