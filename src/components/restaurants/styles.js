import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS } from '../../../constants';
import { elevation } from '../../common/styles';

export const styles = StyleSheet.create({
  elevation,
  container: {
    flex: 1,
  },
  cardContainer: {
    marginVertical: 15,
  },
  title: {
    textAlign: 'center',
    fontFamily: FONTS.especial,
    color: COLORS.blue,
    fontSize: SIZES.extraLarge,
  },
  error: {
    fontSize: SIZES.large,
    textAlign: 'center',
    color: COLORS.ctaClr,
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    width: '100%',
    aspectRatio: 2 / 1,
  },
  spiner: {
    marginTop: 30,
  },
});
