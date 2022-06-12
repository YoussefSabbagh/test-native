import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { styles } from './styles';

import Home from './Home';
import Details from './Details';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const HomeJSM = () => {
  const [loaded] = useFonts({
    Whisper: require('../../../assets/Fonts/Whisper-Regular.ttf'),
    Body: require('../../../assets/Fonts/BarlowSemiCondensed-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeJSM;
