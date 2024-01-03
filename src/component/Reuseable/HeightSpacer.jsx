import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeightSpacer = ({height}) => {
  return <View style={styles.container(height)} />;
};

export default HeightSpacer;

const styles = StyleSheet.create({
  container: height => ({
    height,
  }),
});
