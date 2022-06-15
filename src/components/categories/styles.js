import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';
import { elevation } from '../../common/styles';

export const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginVertical: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  elevation,
  imageContainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: COLORS.white,
  },
  image: {
    width: 30,
    height: 30,
  },
  active: {
    backgroundColor: COLORS.activeClr,
  },
});
