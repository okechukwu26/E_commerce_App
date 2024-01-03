import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {
  Divider,
  HeightSpacer,
  Hero,
  PhoneInput,
  RadioContainer,
  ReuseableButton,
  ReuseableInput,
  WidthSpacer,
} from '../component';
import styles from './login.style';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, TEXT} from '../constant/theme';
const EyeIcon = () => (
  <View>
    <Entypo name="eye" size={20} color={COLORS.gray} />
  </View>
);

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Hero text={'Sign Up'} />
        <View style={styles.formContainer}>
          <ReuseableInput
            placeholder={'First name'}
            icon1={<EvilIcons name="user" size={25} color={COLORS.gray} />}
          />
          <Divider />
          <ReuseableInput
            placeholder={'Last name'}
            icon1={<EvilIcons name="user" size={25} color={COLORS.gray} />}
          />
          <Divider />
          <ReuseableInput
            placeholder={'E-mail'}
            icon1={<AntDesign name="mail" size={25} color={COLORS.gray} />}
          />
          <Divider />
          <PhoneInput />
          <Divider />
          <ReuseableInput
            icon1={<AntDesign name="lock" size={25} color={COLORS.gray} />}
            placeholder={'Password'}
            icon={<EyeIcon />}
          />
          <Divider />
          <ReuseableInput
            icon1={<AntDesign name="lock" size={25} color={COLORS.gray} />}
            placeholder={'Confirm password'}
            icon={<EyeIcon />}
          />
          <Divider />
          <ReuseableInput
            icon1={
              <AntDesign name="addusergroup" size={25} color={COLORS.gray} />
            }
            placeholder={'Refer Code'}
          />
        </View>
        <HeightSpacer height={20} />
        <RadioContainer color1={COLORS.dark} color2={COLORS.green} />
        <HeightSpacer height={20} />
        <View style={styles.flexContainer('center', 'space-between')}>
          <ReuseableButton
            text={'Sign In'}
            color={COLORS.green}
            backgroundColor={COLORS.white}
            borderRadius={12}
            borderColor={COLORS.white}
            width={150}
            height={50}
            size={TEXT.medium}
            onPress={() => navigation.replace('login')}
          />
          <ReuseableButton
            text={'Sign Up'}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

// const styles = StyleSheet.create({});
