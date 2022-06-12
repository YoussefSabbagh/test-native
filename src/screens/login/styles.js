import { StyleSheet } from 'react-native';
import { FONTS } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    color: '#ff00ff',
    fontFamily: FONTS.especial,
    marginBottom: 15,
    textAlign: 'center',
  },
  normal: {
    fontSize: 16,
    color: 'gray',
    fontFamily: FONTS.regular,
    marginBottom: 15,
    textAlign: 'center',
  },
});
