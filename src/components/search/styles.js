import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { elevation } from '../../common/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',

    borderRadius: 20,
  },
  elevation,
  input: { paddingLeft: 10 },
});
