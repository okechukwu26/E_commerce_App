import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../constant/theme';
import {
  HeightSpacer,
  ModalMap,
  ReuseableButton,
  MapLocation,
} from '../component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Geocoder from 'react-native-geocoding';
import AsyncStorage from '@react-native-async-storage/async-storage';
const IconLocation = () => (
  <MaterialIcons color={COLORS.white} size={20} name="my-location" />
);
const Location = ({navigation}) => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [loading, setLoading] = useState(false);

  const [showMap, setShowMap] = useState(false);

  useEffect(() => {}, [loading]);
  useFocusEffect(
    useCallback(() => {
      fetchMapLocation();
    }, [fetchMapLocation]),
  );
  const fetchMapLocation = useCallback(async () => {
    try {
      setLoading(true);
      const position = await MapLocation();
      setLoading(false);
      if (position) {
        setLocation({
          latitude: position.latitude,
          longitude: position.longitude,
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);
  console.log(loading);

  const getAddress = useCallback(async () => {
    try {
      const res = await Geocoder.from(location.latitude, location.longitude);
      await AsyncStorage.setItem('location', res.results[0].formatted_address);
    } catch (error) {
      console.log(error);
    }
  }, [location]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={25} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.text(COLORS.dark, 'medium', 15)}>
          {' '}
          Set Location
        </Text>
        <View />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/image/location.jpg')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.wrapper}>
        <Text
          style={[styles.text(COLORS.dark, 'bold', 16), {textAlign: 'center'}]}>
          FIND STORES AND ITEMS NEAR YOU
        </Text>
        <HeightSpacer height={20} />
        <Text
          style={[
            styles.text(COLORS.gray, 'medium', 13),
            {textAlign: 'center'},
          ]}>
          By allowing location access, you can search for stores and items near
          you and receive more accurate delivery
        </Text>
        <HeightSpacer height={20} />
        <ReuseableButton
          text={'Use Current Location'}
          borderColor={COLORS.green}
          backgroundColor={COLORS.green}
          color={COLORS.white}
          width={'100%'}
          height={40}
          borderRadius={7}
          icon={<IconLocation />}
          loading={loading}
          onPress={getAddress}
        />
        <HeightSpacer height={10} />
        <ReuseableButton
          text={'Set from Map'}
          borderColor={COLORS.green}
          backgroundColor={COLORS.white}
          color={COLORS.green}
          width={'100%'}
          height={40}
          borderRadius={7}
          borderWidth={2}
          loading={loading}
          icon={
            <Image
              source={require('../assets/image/flag.jpg')}
              style={styles.iconImage}
            />
          }
          onPress={() => setShowMap(true)}
        />
      </View>
      <ModalMap visible={showMap} onClose={() => setShowMap(false)} />
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightWhite,
    height: 30,
    paddingHorizontal: 10,
  },
  text: (color, weight, size) => ({
    color,
    fontSize: size,
    fontWeight: weight,
  }),
  container: {
    marginTop: 20,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  wrapper: {
    backgroundColor: COLORS.white,
    marginHorizontal: 15,
  },
  image: {
    width: '100%',
    height: 400,
  },
  imageContainer: {
    marginTop: 20,
  },
  iconImage: {
    width: 30,
    height: 20,
  },
});
