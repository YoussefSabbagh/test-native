import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    marginBottom: 25,
  },
  row: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  name: {
    fontSize: 16,
    color: 'gray',
    maxWidth: '90%',
  },
  price: {
    fontSize: 14,
    color: 'red',
  },
  rating: {
    width: 40,
    height: 40,
    textAlign: 'center',
    lineHeight: 30,
    backgroundColor: 'lightgray',
    color: 'red',
    borderRadius: 20,
  },
  txt: {
    fontSize: 12,
    color: 'gray',
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 2,
  },
});
