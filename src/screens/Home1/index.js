import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';

import { Header } from '../../components/header';
import { Search } from '../../components/search';
import { CategoryItem } from '../../components/categories/categoryItem';

export const Home = () => {
  const categoriesArray = [
    {
      id: '01',
      title: 'Burger',
      imageUrl: require('../../assets/images/burger.png'),
    },
    {
      id: '02',
      title: 'Pizza',
      imageUrl: require('../../assets/images/pizza.png'),
    },
    {
      id: '03',
      title: 'Pasta',
      imageUrl: require('../../assets/images/pasta.png'),
    },
    {
      id: '04',
      title: 'Dessert',
      imageUrl: require('../../assets/images/cake.png'),
    },
    {
      id: '05',
      title: 'Drinks',
      imageUrl: require('../../assets/images/smoothies.png'),
    },
    {
      id: '06',
      title: 'Meal',
      imageUrl: require('../../assets/images/steak.png'),
    },
  ];
  const [activeCategory, setActiveCategory] = useState(
    categoriesArray[0].title
  );

  const [loaded] = useFonts({
    Whisper: require('../../../assets/Fonts/Whisper-Regular.ttf'),
    Body: require('../../../assets/Fonts/BarlowSemiCondensed-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <View>
      <Header />
      <Search setActiveCategory={setActiveCategory} />
      <FlatList
        data={categoriesArray}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CategoryItem
            imageUrl={item.imageUrl}
            title={item.title}
            index={index}
            active={activeCategory === item.title}
            handlePress={() => {
              setActiveCategory(item.title);
            }}
          />
        )}
      />
    </View>
  );
};
