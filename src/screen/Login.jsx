import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {
  HeightSpacer,
  Hero,
  RadioButton,
  WidthSpacer,
  ReuseableButton,
  Divider,
  PhoneInput,
  ReuseableInput,
  RadioContainer,
  Guest,
} from '../component';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './login.style';
import {COLORS, TEXT} from '../constant/theme';
import {useNavigation} from '@react-navigation/native';

const EyeIcon = () => (
  <View>
    <Entypo name="eye" size={20} color={COLORS.gray} />
  </View>
);
const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Hero text={'SIGN IN'} />
      <View style={styles.formContainer}>
        <PhoneInput />
        <Divider />
        <ReuseableInput
          icon1={<AntDesign name="lock" size={25} color={COLORS.gray} />}
          placeholder={'Password'}
          icon={<EyeIcon />}
        />
      </View>
      <HeightSpacer height={20} />
      <View style={styles.SectionContainer}>
        <View style={styles.flexContainer('center', 'space-between')}>
          <View style={styles.flexContainer('center', 'flex-start')}>
            <RadioButton />
            <WidthSpacer width={15} />
            <Text style={styles.texts(COLORS.dark, 'bold')}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.texts(COLORS.green, 'bold')}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <HeightSpacer height={30} />
        <RadioContainer color1={COLORS.dark} color2={COLORS.green} />
        <HeightSpacer height={20} />
        <View style={styles.flexContainer('center', 'space-between')}>
          <ReuseableButton
            text={'Sign Up'}
            color={COLORS.green}
            backgroundColor={COLORS.white}
            borderRadius={12}
            borderColor={COLORS.white}
            width={150}
            height={50}
            size={TEXT.medium}
            onPress={() => navigation.replace('register')}
          />
          <ReuseableButton
            text={'Sign In'}
            color={COLORS.white}
            backgroundColor={COLORS.green}
            borderRadius={5}
            borderColor={COLORS.white}
            width={150}
            height={50}
            size={TEXT.medium}
          />
        </View>
        <HeightSpacer height={50} />
        <Guest />
      </View>
    </SafeAreaView>
  );
};

export default Login;
