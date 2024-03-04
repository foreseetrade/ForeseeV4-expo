import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const NumberPad = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const handleNumberPress = (number: number) => {
    setDisplayValue((prevValue) => {
      if (prevValue.length < 10) {
        return prevValue === "0" ? number.toString() : prevValue + number;
      }
      return prevValue;
    });
  };

  const handleClearPress = () => {
    setDisplayValue("0");
  };

  const handleBackspacePress = () => {
    setDisplayValue((prevValue) =>
      prevValue.length > 1 ? prevValue.slice(0, -1) : "0"
    );
  };

  const renderNumberButton = (number: number) => (
    <TouchableOpacity
      key={number}
      style={styles.button}
      onPress={() => handleNumberPress(number)}
    >
      <Text style={styles.buttonText}>{number}</Text>
    </TouchableOpacity>
  );

  const numberButtons = Array.from({ length: 10 }, (_, index) =>
    renderNumberButton(index)
  );

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {numberButtons}
        <TouchableOpacity style={styles.button} onPress={handleClearPress}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBackspacePress}>
          <Text style={styles.buttonText}>⌫</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  displayContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  displayText: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2196F3",
    width: 64,
    height: 64,
    margin: 10,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
});

export default NumberPad;
