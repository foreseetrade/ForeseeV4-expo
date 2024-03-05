import { colors4C, sizes4C } from "@/app/asthetics";
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

  const numberButtons = Array.from({ length: 9 }, (_, index) =>
    renderNumberButton(index + 1)
  );

  // Special Buttons code :
  const handleSpecialButtonPress = (value: number) => {
    setDisplayValue((prevValue) => {
      const newValue = parseInt(prevValue, 10) + value;
      return newValue <= 9999999999 ? newValue.toString() : prevValue;
    });
  };

  const renderSpecialButton = (value: number, label: string) => (
    <TouchableOpacity
      key={label}
      style={styles.helperButton}
      onPress={() => handleSpecialButtonPress(value)}
    >
      <Text style={styles.helperButtonText}>{label}</Text>
    </TouchableOpacity>
  );

  const specialButtons = [
    { value: 50, label: "+50" },
    { value: 150, label: "+150" },
    { value: 500, label: "+500" },
    { value: 1000, label: "+1000" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{displayValue}</Text>
        </View>

        {/* Special buttons */}
        <View style={styles.buttonContainer}>
          <View style={styles.rowContainer}>
            {specialButtons.map((button) =>
              renderSpecialButton(button.value, button.label)
            )}
          </View>
        </View>
      </View>

      <View style={styles.numbersWrap}>
        <View>
          <View style={styles.buttonContainer}>
            <View style={styles.rowContainer}>{numberButtons.slice(0, 3)}</View>
            <View style={styles.rowContainer}>{numberButtons.slice(3, 6)}</View>
            <View style={styles.rowContainer}>{numberButtons.slice(6, 9)}</View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleClearPress}
              >
                <Text style={styles.buttonText}>Clear</Text>
              </TouchableOpacity>
              {renderNumberButton(0)}
              <TouchableOpacity
                style={styles.button}
                onPress={handleBackspacePress}
              >
                <Text style={styles.buttonText}>⌫</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: sizes4C.small4C,
    // backgroundColor: colors4C.green4C,
  },
  inputContainer: {
    backgroundColor: colors4C.white4C,
    padding: sizes4C.small4C,
    borderRadius: sizes4C.small4C,
  },
  numbersWrap: {
    padding: sizes4C.small4C,
    backgroundColor: colors4C.white4C,
    borderRadius: sizes4C.small4C,
  },
  displayContainer: {
    backgroundColor: colors4C.lightBlue4C,
    borderWidth: 0.5,
    borderColor: colors4C.lightGray4C,
    padding: sizes4C.small4C,
    margin: sizes4C.small4C,
    borderRadius: 8,
    // width: "100%",
  },
  displayText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: colors4C.blue4C,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors4C.light4C,
    borderWidth: 0.2,
    borderColor: colors4C.gray4C,
    width: 80,
    height: 40,
    margin: 8,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: colors4C.blue4C,
  },
  helperButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors4C.light4C,
    borderWidth: 0.3,
    borderColor: colors4C.gray4C,
    width: 64,
    height: 32,
    margin: 8,
    borderRadius: 4,
  },

  helperButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors4C.gray4C,
  },
});

export default NumberPad;
