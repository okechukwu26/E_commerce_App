import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import WidthSpacer from './WidthSpacer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, TEXT} from '../../constant/theme';

const PhoneInput = () => {
  return (
    <View style={styles.container('center', 'space-between')}>
      <View style={styles.container('center', 'center')}>
        <Image
          source={require('../../assets/image/flag.jpg')}
          style={{width: 30, height: 15}}
        />
        <WidthSpacer width={10} />
        <Text style={{color: COLORS.black}}>+234</Text>
        <WidthSpacer width={5} />
        <AntDesign name="caretdown" size={15} color={COLORS.gray} />
      </View>

      <TextInput
        placeholder="phone"
        style={styles.input}
        placeholderTextColor="gray"
        inputMode="tel"
      />
    </View>
  );
};

export default PhoneInput;

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
