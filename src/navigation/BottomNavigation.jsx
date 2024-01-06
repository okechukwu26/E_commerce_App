import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
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
import {useRoute, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {BottomRawSheet} from '../component';

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
  display: 'hidden',
};

const BottomNavigation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const route = useRoute();
  const activeRouteName = getFocusedRouteNameFromRoute(route);
  const sheetRef = useRef(null);
  useEffect(() => {
    setModalVisible(false);
  }, [activeRouteName]);

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };
  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  console.log(modalVisible);
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#EB6A58"
        tabBarHideKeyBoard={true}
        screenOptions={{
          tabBarStyle: {
            display: 'flex',
            width: '90%',
          },
        }}
        // tabBarOptions={{
        //   style: {
        // Adjust the horizontal padding for all tabs
        //   },
        // }}
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
                color={COLORS.gray}
                size={25}
                style={{marginBottom: 15, display: 'none'}}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <TouchableOpacity style={styles.sheet} onPress={() => openSheet()}>
        <Ionicons
          name="menu"
          color={COLORS.gray}
          size={25}
          style={{marginBottom: 15}}
        />
      </TouchableOpacity>
      <BottomRawSheet ref={sheetRef} />
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: COLORS.white,
    padding: 18,
    position: 'absolute',
    top: -50,
    borderRadius: 35,
    borderColor: COLORS.lightWhite,
    borderWidth: 5,
    zIndex: 100,
  },
  sheet: {
    position: 'absolute',
    zIndex: 100,
    bottom: 4.5,
    right: 10,
    paddingHorizontal: 25,
  },
});
