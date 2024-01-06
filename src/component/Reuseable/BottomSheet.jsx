import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {sheet} from './BottomInfo';
import {COLORS} from '../../constant/theme';
import { View } from 'react-native';
const BottomSheet = React.forwardRef(({}, ref) => {
  const [store, setStore] = useState(sheet);
  console.log(sheet);
  return (
    <RBSheet
      ref={ref}
      height={300}
      duration={250}
      closeOnDragDown
      dragFromTopOnly
      customStyles={{
        container: styles.container,
      }}>
      <FlatList
        data={store}
        keyExtractor={item => item.title}
        contentContainerStyle={{marginHorizontal: 10}}
        numColumns={4}
        renderItem={({item}) => (
          <View style={styles.wrapper}>
            <View style={styles.icon}>{item.icon}</View>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      />
    </RBSheet>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    height: 450,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  wrapper: {
    width: '20%',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  text: {
    color: COLORS.dark,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  icon: {
    borderRadius: 10,
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    elevation: 5,
  },
});
