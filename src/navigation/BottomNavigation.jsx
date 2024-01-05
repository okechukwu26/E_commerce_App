import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../constant/theme';
import Like from '../screen/Like';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cart from '../screen/Cart';
import Gift from '../screen/Gift';
import BottomSheet from '../screen/BottomSheet';

const Tab = createBottomTabNavigator();
const tabBarStyle = {
  padding: 20,
  borderRadius: 20,
  height: 70,
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
};
const cartStyle = {
  padding: 20,
  borderRadius: 20,
  height: 70,
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#EB6A58"
      tabBarHideKeyBoard={true}
      headerShown={false}
      inactiveColor="#3e2465"
      barStyle={{height: 100}}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Entypo
              name="home"
              color={focused ? COLORS.green : COLORS.gray}
              size={25}
              style={{marginBottom: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="like"
        component={Like}
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="heart"
              color={focused ? COLORS.green : COLORS.gray}
              size={25}
              style={{marginBottom: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarStyle: cartStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.icon}>
              <FontAwesome6
                name="cart-shopping"
                color={focused ? COLORS.green : COLORS.gray}
                size={25}
                style={{}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="gift"
        component={Gift}
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="shopping-bag"
              color={focused ? COLORS.green : COLORS.gray}
              size={25}
              style={{marginBottom: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="bottomSheet"
        component={BottomSheet}
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="menu"
              color={focused ? COLORS.green : COLORS.gray}
              size={25}
              style={{marginBottom: 15}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: COLORS.white,
    padding: 18,
    position: 'absolute',
    top: -58,
    borderRadius: 35,
    borderColor: COLORS.lightWhite,
    borderWidth: 5,
  },
});
