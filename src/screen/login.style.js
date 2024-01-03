import {StyleSheet} from 'react-native';
import {COLORS, TEXT} from '../constant/theme';

const styles = StyleSheet.create({
  container: {
    //marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: 14,
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
    marginBottom: 30,
  },
  formContainer: {
    backgroundColor: COLORS.lightWhite,

    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: 12,
  },
  flexContainer: (align, justify) => ({
    flexDirection: 'row',
    justifyContent: justify,
    alignItems: align,
  }),

  input: {
    color: COLORS.dark,
    flex: 1,
    fontSize: TEXT.medium,
  },
  bottom: {
    borderBottomWidth: 0.167,
    borderBottomColor: COLORS.lightGrey,
    marginVertical: 10,
    width: '100%',
  },
  SectionContainer: {
    marginLeft: 10,
  },

  texts: (color, weight) => ({
    color: color,
    fontWeight: weight,
  }),
});
export default styles;
