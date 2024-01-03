import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RadioButton} from '..';
import WidthSpacer from './WidthSpacer';

const RadioContainer = ({color1, color2}) => {
  return (
    <View style={styles.container}>
      <RadioButton />
      <WidthSpacer width={15} />
      <Text style={styles.texts(color1)}>I agree with</Text>
      <WidthSpacer width={10} />
      <TouchableOpacity>
        <Text style={styles.texts(color2)}>Terms & Conditions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  texts: color => ({
    color,
    fontWeight: 'bold',
  }),
});
