import {StyleSheet, View} from 'react-native';
import React from 'react';

const WidthSpacer = ({width}) => {
  return <View style={styles.container(width)} />;
};

export default WidthSpacer;

const styles = StyleSheet.create({
  container: width => ({
    width,
  }),
});
