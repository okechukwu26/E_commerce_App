import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ReuseableButton = ({
  text,
  borderColor,
  backgroundColor,
  color,
  borderRadius,
  width,
  height,
  onPress,
  size,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container(
        borderColor,
        backgroundColor,
        borderRadius,
        width,
        height,
      )}>
      <Text style={styles.text(color, size)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ReuseableButton;

const styles = StyleSheet.create({
  container: (borderColor, backgroundColor, borderRadius, width, height) => ({
    width,
    height,
    borderColor,
    backgroundColor,
    borderRadius,
    justifyContent: 'center',
  }),
  text: (color, size) => ({
    color,
    fontSize: size,
    textAlign: 'center',
    fontWeight: 'bold',
  }),
});
