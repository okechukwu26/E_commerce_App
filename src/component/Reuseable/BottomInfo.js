import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constant/theme';
import React from 'react';

export const sheet = [
  {
    title: 'profile',
    icon: (
      <AntDesign
        size={25}
        name="picture"
        color={COLORS.lightGrey}
        style={{borderColor: COLORS.white, borderWidth: 1}}
      />
    ),
  },
  {
    title: 'My Address',
    icon: <FontAwesome6 color={COLORS.white} size={25} name="location-dot" />,
  },
  {
    title: 'Language',
    icon: <Fontisto name="world-o" size={25} color={COLORS.white} />,
  },
  {
    title: 'Coupon',
    icon: (
      <MaterialCommunityIcons
        name="ticket-percent"
        size={25}
        color={COLORS.white}
      />
    ),
  },
  {
    title: 'Help & Support',
    icon: <Entypo name="help" size={25} color={COLORS.white} />,
  },
  {
    title: 'Provacy Policy',
    icon: <FontAwesome6 name="scroll" size={25} color={COLORS.white} />,
  },
  {
    title: 'About us',
    icon: <Entypo name="info" size={25} color={COLORS.white} />,
  },

  {
    title: 'Terms & Condition',
    icon: <Ionicons name="receipt" size={25} color={COLORS.white} />,
  },
  {
    title: 'Live Chat',
    icon: <AntDesign name="wechat" size={25} color={COLORS.white} />,
  },
  {
    title: 'Refund Policy',
    icon: (
      <FontAwesome6 name="money-bill-transfer" size={25} color={COLORS.white} />
    ),
  },
  {
    title: 'Refer & Earn ',
    icon: <FontAwesome6 name="users" size={25} color={COLORS.white} />,
  },
  {
    title: 'Wallet ',
    icon: <Fontisto name="wallet" size={25} color={COLORS.white} />,
  },
  {
    title: 'Loyalty Points ',
    icon: <Ionicons name="trophy-sharp" size={25} color={COLORS.white} />,
  },
  {
    title: 'Join as a Delivery Man',
    icon: (
      <MaterialCommunityIcons
        name="truck-delivery"
        size={25}
        color={COLORS.white}
      />
    ),
  },
  {
    title: 'Join as a Store',
    icon: <Fontisto name="shopping-store" size={25} color={COLORS.white} />,
  },
  {
    title: 'Sign In',
    icon: (
      <MaterialCommunityIcons name="login" size={25} color={COLORS.white} />
    ),
  },
];
