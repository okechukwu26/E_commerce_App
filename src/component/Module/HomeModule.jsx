import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/theme';

const HomeModule = () => {
  const module = [
    {
      title: 'Supermarket',
      imageUrl: require('../../assets/image/supermarket.jpg'),
    },
    {
      title: 'Pharmacy',
      imageUrl: require('../../assets/image/pharm.jpg'),
    },
    {
      title: 'Food',
      imageUrl: require('../../assets/image/foodBowl.jpg'),
    },
    {
      title: 'Parcel',
      imageUrl: require('../../assets/image/parcel.jpg'),
    },
    {
      title: 'Services',
      imageUrl: require('../../assets/image/server.jpg'),
    },
    {
      title: 'Gadgets',
      imageUrl: require('../../assets/image/gadge.jpg'),
    },
    {
      title: 'Wine & Spirits',
      imageUrl: require('../../assets/image/win.jpg'),
    },
  ];
  return (
    <View style={styles.container}>
      {module.map(item => (
        <View key={item.title} style={styles.item}>
          <View style={styles.imageContainer}>
            <Image source={item.imageUrl} style={styles.image} />
          </View>

          <Text style={styles.text}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default HomeModule;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  item: {
    width: '30%', // 3 items per row with some spacing
    height: 100,
    backgroundColor: COLORS.white,
    margin: 5,
    borderRadius: 12,
    elevation: 3,
  },
  image: {
    width: 70,
    height: '100%',
    resizeMode: 'cover',
  },
  imageContainer: {
    width: '100%',
    height: 80,
    alignItems: 'center',
  },
  text: {
    color: COLORS.dark,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
 
  },
});
