import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors4C, sizes4C } from '../asthetics';

const CustomLinearGradient = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors4C.lightGray4C, colors4C.light4C]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradient}
      >
        {/* Your content goes here */}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    width: '100%', // Set the width of the gradient
    height: '100%', // Set the height of the gradient
    borderRadius: sizes4C.small4C, // Set border radius if needed
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomLinearGradient;
