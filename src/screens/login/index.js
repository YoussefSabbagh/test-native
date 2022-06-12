import { Text, View } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';

const Login = () => {
  const [fonts] = useFonts({
    Whisper: require('../../../assets/Fonts/Whisper-Regular.ttf'),
  });
  console.log('fonts = ', fonts);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.normal}>Log In</Text>
    </View>
  );
};

export default Login;
