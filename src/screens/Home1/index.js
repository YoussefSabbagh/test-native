import { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';

import { Header } from '../../components/header';
import { Search } from '../../components/search';
import { CategoryList } from '../../components/categories/categoryList';
import { Restaurant } from '../../components/restaurants';

export const Home = () => {
  const [loaded] = useFonts({
    Whisper: require('../../../assets/Fonts/Whisper-Regular.ttf'),
    Body: require('../../../assets/Fonts/BarlowSemiCondensed-Regular.ttf'),
  });

  const [activeCategory, setActiveCategory] = useState('Burger');
  const [location, setLocation] = useState('New York,NY');

  const searchParams = {
    term: activeCategory,
    location,
    limit: 5,
  };

  if (!loaded) return null;

  return (
    <View style={styles.container}>
      <Header />
      <Search setActiveCategory={setActiveCategory} />
      <CategoryList
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Restaurant searchParams={searchParams} />
    </View>
  );
};
