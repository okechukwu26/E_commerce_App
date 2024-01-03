import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constant/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const RadioButton = () => {
  const [select, setSelect] = useState(false);
  return (
    <TouchableOpacity onPress={() => setSelect(!select)}>
      {!select && <View style={styles.container} />}
      {select && (
        <AntDesign name="checksquare" size={20} color={COLORS.green} />
      )}
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: COLORS.gray,
  },
});
