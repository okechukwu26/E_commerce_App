import {PermissionsAndroid, Platform} from 'react-native';

import Geolocation from 'react-native-geolocation-service';

const MapLocation = async () => {
  const result = await requestLocationPermission();
  if (!result) {
    return;
  }
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        resolve({...position.coords}); // Resolve the promise with the location data
      },
      error => {
        console.error('Error getting location:', error);
        reject(error); // Reject the promise if there's an error
      },
      {enableHighAccuracy: true, timeout: 30000, maximumAge: 20000},
    );
  });
};
export default MapLocation;

const requestLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    Geolocation.setRNConfiguration({
      authorizationLevel: 'whenInUse',
    });
    Geolocation.requestAuthorization();
    return null;
  } else if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }
};

const getLocation = async () => {
  const result = await requestLocationPermission();
  if (!result) {
    return;
  }
  Geolocation.getCurrentPosition(
    pos => pos,
    error => error,
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000},
  );
  //AIzaSyB1u4N1oefmnN5kL5ee6rlZZ67EV4VflMI
};

// export default MapLocation;
