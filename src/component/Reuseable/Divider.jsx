import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/theme';

const Divider = () => {
  return <View style={styles.bottom} />;
};

export default Divider;

const styles = StyleSheet.create({
  bottom: {
    borderBottomWidth: 0.167,
    borderBottomColor: COLORS.lightGrey,
    marginVertical: 10,
    width: '100%',
  },
});
