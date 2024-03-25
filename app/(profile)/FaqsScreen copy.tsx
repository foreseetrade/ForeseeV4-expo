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
// https://snyk.io/advisor/npm-package/react-native-faq
const FaqsScreen = () => {
  const navigation = useNavigation();
  const [faqsData, setFaqsData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fnGetFAQs = async () => {
    setIsLoading(true);
    const res = await apiGetFaqs();
    console.log("Res fnGetFAQs", res?.data);

    if (res?.data) {
      setFaqsData(res?.data);
    }
    console.log("faqsData", faqsData);
    setIsLoading(false);
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
        {faqsData &&
          !isLoading &&
          faqsData?.map((item: any, index: number) => {
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>
                          {item?.question}
                        </AccordionTitleText>
                        {isExpanded ? (
                          // <AccordionIcon as={ChevronUpIcon} ml="$3" />
                          <Feather name="chevron-up" size={24} color="black" />
                        ) : (
                          <Feather
                            name="chevron-down"
                            size={24}
                            color="black"
                          />
                          // <AccordionIcon as={ChevronDownIcon} ml="$3" />
                        )}
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionContentText>{item.answer}</AccordionContentText>
              </AccordionContent>
            </AccordionItem>
          })}
      </Accordion>

      {isLoading && <Spinner />}
    </>
  );
};

export default FaqsScreen;

const styles = StyleSheet.create({});
