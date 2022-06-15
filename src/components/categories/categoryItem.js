import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export const CategoryItem = ({ imageUrl, title, active, handlePress }) => {
  return (
    <Pressable onPress={handlePress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          active ? styles.active : null,
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image} />
        </View>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
};
