import { StyleSheet, Text, View } from "react-native";
import React from "react";


const FeedbackScreen = ({ isVisible }: any) => {
  const [modalVisible, setModalVisible] = React.useState(isVisible);  
  React.useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);

  return (
    <>
      
    </>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({});
