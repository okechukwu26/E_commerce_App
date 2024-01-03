import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/theme';

const Hero = ({text}) => {
  return (
    <View>
      <View style={styles.HeroContainer}>
        <Image
          source={require('../../assets/image/shop.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  HeroContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
  text: {
    color: COLORS.dark,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
