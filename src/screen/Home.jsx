import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {COLORS} from '../constant/theme';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FeatureStore, HeightSpacer, HomeModule} from '../component';

const Home = ({navigation}) => {
  const [location, setLocation] = useState('');

  useFocusEffect(
    useCallback(() => {
      getPlace();
    }, [getPlace]),
  );
  const getPlace = useCallback(async () => {
    const place = await AsyncStorage.getItem('location');
    if (place) {
      setLocation(place);
    }
    console.log(place.slice(0, 50));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.flexDirection('center', 'space-between')}>
          <TouchableOpacity
            onPress={() => navigation.navigate('location')}
            style={[
              styles.flexDirection('center, space-between'),
              styles.address,
            ]}>
            <Entypo size={20} color={COLORS.dark} name="location-pin" />
            <Text style={styles.text(COLORS.dark, 12)}>
              {`${location.slice(0, 45)} ...`}
            </Text>
            <AntDesign name="caretdown" size={15} color={COLORS.gray} />
          </TouchableOpacity>
          <View style={{paddingRight: 10}}>
            <Ionicons size={20} color={COLORS.dark} name="notifications" />
          </View>
        </View>
        <HeightSpacer height={20} />
        <HomeModule />
        <HeightSpacer height={20} />

        <View style={styles.DeliverContainer}>
          <Text style={styles.text(COLORS.dark, 15, 'bold')}>Deliver To</Text>
          <View style={styles.deliver}>
            <Entypo size={40} color={COLORS.green} name="location-pin" />
            <View style={{flex: 1}}>
              <Text style={styles.text(COLORS.dark, 15, 'bold')}>Others</Text>
              <Text style={styles.text(COLORS.lightGrey, 10)}>{location}</Text>
            </View>
          </View>
        </View>
        <HeightSpacer height={20} />
        <View
          style={[
            styles.flexDirection('center', 'space-between'),
            {marginHorizontal: 10},
          ]}>
          <Text style={styles.text(COLORS.dark, 18, 'bold')}>
            Featured Stores
          </Text>
          <TouchableOpacity>
            <Text style={styles.text(COLORS.green, 13, 'bold')}>View all</Text>
          </TouchableOpacity>
        </View>
        <HeightSpacer height={20} />
        <FeatureStore location={location} />
        <HeightSpacer height={100} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  flexDirection: (align, justify) => ({
    flexDirection: 'row',
    alignItems: align,
    justifyContent: justify,
  }),
  address: {
    flex: 1,
    padding: 15,
  },
  text: (color, size, bold) => ({
    color,
    fontSize: size,
    fontWeight: bold,
  }),
  DeliverContainer: {
    marginHorizontal: 10,
  },
  deliver: {
    width: '90%',
    height: 60,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    borderRadius: 7,
  },
});
