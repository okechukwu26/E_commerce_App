import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {WidthSpacer} from '..';
import {COLORS} from '../../constant/theme';

const ReusableButton = ({
  text,
  borderColor,
  backgroundColor,
  color,
  borderRadius,
  width,
  height,
  onPress,
  size,
  icon,
  borderWidth,
  loading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading} // Disable TouchableOpacity when loading is true
      style={styles.container(
        borderColor,
        backgroundColor,
        borderRadius,
        width,
        height,
        borderWidth,
      )}>
      <View style={styles.wrapper}>
        {loading ? ( // Conditionally render ActivityIndicator based on 'loading' prop
          <ActivityIndicator size="large" color={color} />
        ) : (
          <>
            {icon && icon}
            {icon && <WidthSpacer width={10} />}
            <Text style={styles.text(color, size)}>{text}</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (
    borderColor,
    backgroundColor,
    borderRadius,
    width,
    height,
    borderWidth,
  ) => ({
    width,
    height,
    borderColor,
    backgroundColor,
    borderRadius,
    justifyContent: 'center',
    borderWidth,
  }),
  text: (color, size) => ({
    color,
    fontSize: size,
    textAlign: 'center',
    fontWeight: 'bold',
  }),
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ReusableButton;
