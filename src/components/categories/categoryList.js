import { View, FlatList } from 'react-native';

import { CategoryItem } from './categoryItem';
import { categoriesArray } from './data';

export const CategoryList = ({ activeCategory, setActiveCategory }) => {
  return (
    <View>
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
