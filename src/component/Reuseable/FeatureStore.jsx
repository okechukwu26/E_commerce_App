import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constant/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Rating} from 'react-native-stock-star-rating';
import HeightSpacer from './HeightSpacer';

const FeatureStore = ({location}) => {
  const [like, setLike] = useState(false);
  const store = [
    {
      title: 'Hhv',
      location: 'no 12 julius street lakowe lagos',
      imageUrl: require('../../assets/image/soup.jpg'),
      status: 'closed now',
    },
    {
      title: 'Hhbeveragev',
      location: 'no 12 julius street lakowe lagos',
      imageUrl: require('../../assets/image/soup.jpg'),
      status: 'closed now',
    },
    {
      title: 'wine',
      location: 'no 12 julius street lakowe lagos',
      imageUrl: require('../../assets/image/rest.jpg'),
      status: 'closed now',
    },
  ];

  return (
    <View style={styles.content}>
      <FlatList
        data={store}
        keyExtractor={item => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{columnGap: 10}}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image source={item.imageUrl} style={styles.image} />
              <TouchableOpacity
                style={styles.iconPosition}
                onPress={() => setLike(!like)}>
                <AntDesign
                  size={15}
                  name={like ? 'heart' : 'hearto'}
                  color={like ? COLORS.red : COLORS.gray}
                />
              </TouchableOpacity>
              <View style={styles.closed}>
                <Text style={styles.text('bold', 'center', COLORS.white)}>
                  closed Now
                </Text>
              </View>
            </View>
            <HeightSpacer height={5} />
            <Text style={styles.text('bold', 'left', COLORS.dark, 15)}>
              {item.title}
            </Text>
            <Text style={styles.text('bold', 'left', COLORS.lightGrey, 10)}>
              {`${location.slice(0, 40)} ...`}
            </Text>
            <Rating
              maxStars={5}
              bordered={false}
              stars={5}
              color={COLORS.gray}
              size={15}
            />
          </View>
        )}
      />
    </View>
  );
};

export default FeatureStore;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    height: 150,
    width: 200,
  },
  imageContainer: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    // justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },

  image: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
  },
  content: {
    marginLeft: 12,
  },
  iconPosition: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: COLORS.white,
    padding: 3,
    borderRadius: 5,
    zIndex: 100,
  },
  closed: {
    position: 'absolute',
    flex: 1,
    backgroundColor: COLORS.black,
    opacity: 0.5,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: (bold, align, color, size) => ({
    fontWeight: bold,
    textAlign: align,
    color,
    fontSize: size,
  }),
});
