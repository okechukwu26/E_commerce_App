import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/theme';
import WidthSpacer from './WidthSpacer';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Guest = () => {
  const navigation = useNavigation();
  const handleContinue = async () => {
    const location = await AsyncStorage.getItem('location');
    if (!location) {
      navigation.navigate('location');
    } else {
      navigation.replace('bottom', {location});
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleContinue}>
      <Text style={styles.text(COLORS.gray, 'medium')}>continue as </Text>
      <WidthSpacer width={5} />
      <Text style={styles.text(COLORS.black, 'bold')}>Guest</Text>
    </TouchableOpacity>
  );
};

export default Guest;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: (color, weight) => ({
    color,
    fontWeight: weight,
    fontSize: 15,
  }),
});
