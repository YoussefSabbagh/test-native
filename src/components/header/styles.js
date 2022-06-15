import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  header: {
    marginTop: 15,
  },
  line1: {
    fontSize: SIZES.large,
    fontFamily: FONTS.especial,
    color: COLORS.blue,
  },
  line2: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.especial,
    color: COLORS.ctaClr,
  },
});
