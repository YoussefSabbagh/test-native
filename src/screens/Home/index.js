import { FlatList, Text, View } from 'react-native';
import { styles } from './home.styles';
import { RestaurantCard } from '../../components/RestaurantCard';
import restaurants from '../../../assets/data/restaurants.json';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maria's desserts</Text>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantCard restaurant={item} />}
      />
    </View>
  );
};

export default Home;
