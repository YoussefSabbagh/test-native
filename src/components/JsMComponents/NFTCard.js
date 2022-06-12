import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet, Text } from 'react-native';

import { COLORS, SIZES, SHADOWS, assets } from '../../../constants';
// import { SubInfo, EthPrice, NFTTitle } from './SubInfo';
// import { RectButton, CircleButton } from './Button';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Text>Joder</Text>
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Image source={data.image} resizeMode="cover" style={styles.image} />

    //     <CircleButton imgUrl={assets.heart} right={10} top={10} />
    //   </View>

    //   <SubInfo />

    //   <View style={{ width: '100%', padding: SIZES.font }}>
    //     <NFTTitle
    //       title={data.name}
    //       subTitle={data.creator}
    //       titleSize={SIZES.large}
    //       subTitleSize={SIZES.small}
    //     />

    //     <View
    //       style={{
    //         marginTop: SIZES.font,
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <EthPrice price={data.price} />
    //       <RectButton
    //         minWidth={120}
    //         fontSize={SIZES.font}
    //         handlePress={() => navigation.navigate('Details', { data })}
    //       />
    //     </View>
    //   </View>
    // </View>
  );
};

export default NFTCard;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  header: {
    width: '100%',
    height: 250,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
});
