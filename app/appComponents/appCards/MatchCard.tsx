import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { colors4C, imgBlurHash4C, sizes4C } from "@/app/asthetics";

// @ts-ignore
import iconIpl from "../../../assets/images/logoTeams/IplLogo.svg";
import MatchStatusChip from "../appChips/MatchStatusChip";
import getTeamImageUrl from "../appUtils/functions/getImageUrl";
import { router } from "expo-router";

const MatchCard = ({
  showTopIcon,
  showScores,
  showRRs,
  showSummary,
  matchNo,
  tossSummary,
  matchStatus,
  teamA,
  teamAScore,
  teamAOvers,
  teamACRR,
  teamARRR,
  teamARR,
  teamAOdds,
  teamB,
  teamBScore,
  teamBOvers,
  teamBCRR,
  teamBRRR,
  teamBRR,
  teamBOdds,
  matchStadium,
  matchSummary,
  navigateTo,
}: any) => {
  const handlePress = () => {
    console.log("MatchCard pressed");
    if (!navigateTo) return;
    router.push(navigateTo);
  };

  return (
    // {
    // showTopIcon: boolean | any;
    // showScores: boolean | any;
    // showRRs: boolean | any;
    // showSummary: boolean | any;
    // matchNo: number | any;
    // tossSummary: string | any;
    // matchStatus: string | any;
    // teamA: string | any;
    // teamAScore: string | any;
    // teamAOvers: number | any;
    // teamACRR: number | any;
    // teamARRR: number | any;
    // teamARR: number | any;
    // teamAOdds: number | any;
    // teamB: string | any;
    // teamBScore: string | any;
    // teamBOvers: number | any;
    // teamBCRR: number | any;
    // teamBRRR: number | any;
    // teamBRR: number | any;
    // teamBOdds: number | any;
    // matchStadium: string | any;
    // matchSummary: string | any;
    // }
    // <View>
    <>
      <Pressable onPress={handlePress}>
        <View
          style={{
            flexDirection: "column",
            gap: 8,
          }}
        >
          {/* Line 1 Start */}
          {showTopIcon && (
            <View style={styles.ipllogoWrap}>
              <Image
                style={styles.ipllogo}
                source={iconIpl}
                placeholder={imgBlurHash4C}
                contentFit="cover"
                transition={8}
              />
            </View>
          )}
          <View style={styles.cardContentWrap}>
            <View style={styles.cardContent}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontSize: 16 }}>Match {matchNo}</Text>
                  <Text style={{ fontSize: 12, color: colors4C.gray4C }}>
                    {tossSummary}
                  </Text>
                </View>
                <Text>
                  {" "}
                  <MatchStatusChip
                    matchStatus={matchStatus || "Upcoming"}
                  />{" "}
                </Text>
              </View>
              {/* Line 1 End */}

              {/* Line 2 Start */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={styles.teamDiv}>
                  <Image
                    source={getTeamImageUrl(`${teamA}Logo`)}
                    placeholder={imgBlurHash4C}
                    style={styles.teamIcon}
                  />
                  <Text style={styles.teamName}>{teamA}</Text>
                </View>

                <Text>V/S</Text>

                <View style={styles.teamDiv}>
                  <Text style={styles.teamName}>{teamB}</Text>
                  <Image
                    source={getTeamImageUrl(`${teamB}Logo`)}
                    placeholder={imgBlurHash4C}
                    style={styles.teamIcon}
                  />
                </View>
              </View>
              {/* Line 2 End */}

              {/* Line 3 Start */}
              {showScores && (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={styles.teamScoreWrap}>
                    <Text style={styles.scoreText}> {teamAScore} </Text>
                    <Text style={styles.oversText}> ({teamAOvers}) </Text>
                  </View>

                  <View style={styles.teamScoreWrap}>
                    <Text style={styles.scoreText}> {teamBScore} </Text>
                    <Text style={styles.oversText}> ({teamBOvers}) </Text>
                  </View>
                </View>
              )}
              {/* Line 3 End */}

              {/* Line 4 Start */}
              {showRRs && (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text>
                      {" "}
                      CRR<Text style={styles.rrText}> {teamACRR}</Text>{" "}
                    </Text>
                    <Text>
                      {" "}
                      RRR<Text style={styles.rrText}> {teamARRR}</Text>{" "}
                    </Text>
                  </View>
                  <Text>
                    {" "}
                    RR<Text style={styles.rrText}> {teamBRR}</Text>{" "}
                  </Text>
                </View>
              )}
              {/* Line 4 End */}
            </View>
            {/* Line 5 Start */}
            {showSummary && (
              <View style={styles.summaryDiv}>
                <Text style={styles.summaryText}>{matchSummary}</Text>
              </View>
            )}
            {/* Line 5 End */}
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  ipllogo: {
    width: 40,
    height: 64,
    // borderRadius: 360,
    objectFit: "cover",
  },
  ipllogoWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -32,
    zIndex: 1,
  },
  cardContentWrap: {
    backgroundColor: colors4C.light4C,
    borderWidth: 0.4,
    borderColor: colors4C.purple4C,
    borderRadius: sizes4C.small4C,
  },
  cardContent: {
    backgroundColor: "white",
    gap: 10,
    padding: sizes4C.medium4C,
    borderTopLeftRadius: sizes4C.small4C,
    borderTopRightRadius: sizes4C.small4C,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors4C.blue4C,
  },
  oversText: {
    fontSize: 12,
    letterSpacing: 0.5,
  },
  rrText: {
    fontSize: 18,
    letterSpacing: 0.5,
    fontWeight: "500",
    color: colors4C.blue4C,
  },
  teamName: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors4C.blue4C,
  },
  teamScoreWrap: { flexDirection: "row", alignItems: "baseline", gap: 1 },
  teamIcon: {
    width: 32,
    height: 32,
    // borderRadius: 360,
    objectFit: "cover",
  },
  teamDiv: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors4C.light4C,
    padding: sizes4C.small4C,
    borderStyle: "solid",
    borderColor: colors4C.lightBlue4C,
    borderWidth: 1,
    borderRadius: sizes4C.small4C,
  },
  summaryDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: sizes4C.medium4C,
    backgroundColor: colors4C.lightBlue4C,
    borderBottomRightRadius: sizes4C.small4C,
    borderBottomLeftRadius: sizes4C.small4C,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: "500",
    color: colors4C.black4C,
  },
});
