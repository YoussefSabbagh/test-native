import { useState } from 'react';
import { FlatList, View, Text, SafeAreaView, StyleSheet } from 'react-native';

import { COLORS, NFTData } from '../../../constants';
import NFTCard from '../../components/JsMComponents/NFTCard';
import HomeHeader from '../../components/JsMComponents/HomeHeader';
import FocusedStatusBar from '../../components/JsMComponents/FocusedStatusBar';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
    </SafeAreaView>
  );
};

export default Home;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: Whisper,
  },
  title: {
    fontSize: 24,
    color: '#0000ff',
    marginBottom: 15,
    textAlign: 'center',
  },
});
