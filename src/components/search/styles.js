import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { elevation } from '../common/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',

    borderRadius: 20,
  },
  elevation,
  input: { paddingLeft: 10 },
});
