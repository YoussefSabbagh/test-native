import React from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from './restaurant.styles';

export const RestaurantCard = ({ restaurant }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View style={styles.txt}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.price}>
            Delivey Fee: {restaurant.deliveryFee}
          </Text>
          <Text style={styles.txt}>
            Delivery Time: {restaurant.minDeliveryTime} -{' '}
            {restaurant.maxDeliveryTime} min.
          </Text>
        </View>
        <View>
          <Text style={(styles.txt, styles.rating)}>{restaurant.rating}</Text>
        </View>
      </View>
    </View>
  );
};
