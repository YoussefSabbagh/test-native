import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../constants/theme';
import { elevation } from '../common/styles';

export const CategoryItem = ({
  imageUrl,
  title,
  index,
  active,
  handlePress,
}) => {
  return (
    <Pressable onPress={handlePress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 10 },
          active
            ? { backgroundColor: COLORS.activeClr }
            : { backgroundColor: COLORS.white },
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

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    marginVertical: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  elevation,
  imageContainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: COLORS.white,
  },
  image: {
    width: 30,
    height: 30,
  },
});
