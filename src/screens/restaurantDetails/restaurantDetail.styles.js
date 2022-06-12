import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: '#0000ff',
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 2,
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
});
