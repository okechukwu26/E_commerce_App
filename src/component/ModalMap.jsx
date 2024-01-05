import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {COLORS} from '../constant/theme';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Callout,
  Circle,
} from 'react-native-maps';
import MapLocation from './Reuseable/MapLocation';
import {useFocusEffect} from '@react-navigation/native';
import Geocoder from 'react-native-geocoding';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ModalMap = ({visible, onClose}) => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [place, setPlace] = useState('');
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      fetchMapLocation();
    }, [fetchMapLocation]),
  );
  const fetchMapLocation = useCallback(async () => {
    try {
      setLoading(true);
      const position = await MapLocation();
      if (position) {
        setLocation({
          latitude: position.latitude,
          longitude: position.longitude,
        });
        const res = await Geocoder.from(position.latitude, position.longitude);
        await AsyncStorage.setItem(
          'location',
          res.results[0].formatted_address,
        );
        setPlace(res.results[0].formatted_address);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(location);
  const getPlace = async () => {
    const res = await Geocoder.from(location.latitude, location.longitude);
    setPlace(res.results[0].formatted_address);
    await AsyncStorage.setItem('location', res.results[0].formatted_address);
  };
  const mapRef = useRef();
  console.log(place);
  return (
    <Modal visible={visible}>
      <View style={styles.modalContainer}>
        <MapView
          ref={mapRef}
          zoomControlEnabled={true}
          showsMyLocationButton={true}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          onPress={e => {
            console.log(e.nativeEvent.coordinate);
            setLocation({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}>
          <Marker
            coordinate={location}
            pinColor={COLORS.green}
            draggable={true}
            onDragStart={e => {
              console.log('drag start', e.nativeEvent.coordinate);
            }}
            onDragEnd={e => {
              setLocation({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
              getPlace();
            }}>
            <Callout>
              <Text style={styles.text}>I'm Here</Text>
            </Callout>
          </Marker>
          <Circle center={location} radius={500} />
        </MapView>
        <View style={styles.searchResultContainer}>
          <View style={styles.wrapper}>
            <Text style={styles.texts('bold', COLORS.dark, 15)}>
              search places
            </Text>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="closecircle" size={20} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.result}>
            <Entypo size={25} color={COLORS.green} name="location-pin" />
            <Text style={styles.texts('bold', COLORS.white, 12)}>{place}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalMap;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  text: {
    color: COLORS.red,
    fontWeight: 'bold',
  },
  texts: (weight, color, size, align) => ({
    fontWeight: weight,
    color,
    fontSize: size,
    textAlign: align,
  }),
  searchResultContainer: {
    padding: 10,
    backgroundColor: COLORS.lightGreen,

    position: 'absolute',
    width: '100%',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
