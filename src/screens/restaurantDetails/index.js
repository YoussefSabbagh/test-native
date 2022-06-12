import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './restaurantDetail.styles';
import restaurants from '../../../assets/data/restaurants.json';

const RestaurantDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurants[1].name}</Text>
      <Image
        source={{
          uri: restaurants[0].image,
        }}
        style={styles.image}
      />
      <View>
        <Feather
          name="arrow-left-circle"
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default RestaurantDetail;
