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
  Spinner,
} from "@gluestack-ui/themed";
import { useNavigation } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors4C } from "../asthetics";
// https://snyk.io/advisor/npm-package/react-native-faq
const FaqsScreen = () => {
  const navigation = useNavigation();
  const [faqsData, setFaqsData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fnGetFAQs = async () => {
    setIsLoading(true);
    const res = await apiGetFaqs();
    console.log("Res fnGetFAQs", res?.data);
    setFaqsData(res?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    // Update header name when component mounts
    navigation.setOptions({
      headerTitle: "FAQs",
    });
  }, []);

  useEffect(() => {
    fnGetFAQs();
  }, []);

  return (
    <>
      <Accordion
        width="100%"
        size="md"
        variant="filled"
        type="single"
        isCollapsible={true}
        isDisabled={false}
      >
        {faqsData.length > 0 &&
          !isLoading &&
          faqsData.map((item: any, index: number) => (
            <AccordionItem key={index} value="a">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>
                          {item?.question}
                        </AccordionTitleText>
                        {isExpanded ? (
                          <Feather name="chevron-up" size={24} color="black" />
                        ) : (
                          <Feather
                            name="chevron-down"
                            size={24}
                            color="black"
                          />
                        )}
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionContentText>{item?.answer}</AccordionContentText>
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>

      {isLoading && <Spinner color={colors4C.purple4C} />}
    </>
  );
};

export default FaqsScreen;

const styles = StyleSheet.create({});
