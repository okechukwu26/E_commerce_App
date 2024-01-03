import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Entypo} from 'react-native-vector-icons';
import {COLORS, TEXT} from '../../constant/theme';
import WidthSpacer from './WidthSpacer';

const ReuseableInput = ({icon1, icon, placeholder}) => {
  return (
    <View style={styles.container('center', 'space-between')}>
      <View style={[styles.container('center', 'flex-start'), {flex: 1}]}>
        {icon1}
        <WidthSpacer width={10} />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          style={styles.input}
        />
      </View>
      {icon}
    </View>
  );
};

export default ReuseableInput;

const styles = StyleSheet.create({
  container: (align, justify) => ({
    flexDirection: 'row',
    alignItems: align,
    justifyContent: justify,
    height: 40,
  }),
  input: {
    color: COLORS.dark,
    flex: 1,
    fontSize: TEXT.medium,
  },
});
