import { Text, View } from 'react-native';
import { styles } from './styles';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.line1}>Grab your</Text>
      <Text style={styles.line2}>delicious meal</Text>
    </View>
  );
};
