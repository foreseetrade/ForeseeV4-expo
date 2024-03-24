import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { apiGetFaqs } from "../services/BEApis/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@gluestack-ui/themed";
import { useNavigation } from "expo-router";
// https://snyk.io/advisor/npm-package/react-native-faq
const FaqsScreen = () => {
  const navigation = useNavigation();
  const [faqsData, setFaqsData] = useState<any>([]);


  const fnGetFAQs = async () => {
    const res = await apiGetFaqs();
    console.log("Res fnGetFAQs", res?.data);

    if (res?.data) {
      setFaqsData(res?.data);
    }
  };


  useEffect(() => {
    fnGetFAQs();
  }, []);

  useEffect(() => {
    // Update header name when component mounts
    navigation.setOptions({
      headerTitle: "FAQs",
    });
  }, []);

  return <View> </View>;
};

export default FaqsScreen;

const styles = StyleSheet.create({});
