import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Curso = () => {
  const [goalEntered, setGoalEntered] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const handlerInput = (enteredText) => {
    setGoalEntered(enteredText);
  };

  const handlerAdd = () => {
    if (goalEntered !== '') {
      setCourseGoals((preCourseGoals) => [...preCourseGoals, goalEntered]);
      setGoalEntered('');
    } else {
      alert('no value');
    }
  };
  const handlerDelete = () => {
    console.info('deleted');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/bg.png')}
        style={styles.bgImage}
      />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter test"
          onChangeText={handlerInput}
          value={goalEntered}
        />
        <Button title="Enviar" onPress={handlerAdd} />
      </View>
      <View>
        <Text style={styles.title}>Lista de metas</Text>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => {
            return index + '-' + item;
          }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <View style={styles.row}>
                <Text> {itemData.item} </Text>
                <Pressable
                  android_ripple={{ color: 'purple' }}
                  onPress={handlerDelete}
                >
                  <Feather
                    name="trash"
                    size={24}
                    color="black"
                    style={styles.icon}
                  />
                </Pressable>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Curso;

const styles = StyleSheet.create({
  container: {
    padding: 1,
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 2,
  },
  bgImage: {
    width: '100%',
    aspectRatio: 1 / 2,
    opacity: 0.7,
  },
  button: {
    margin: 20,
  },
  input: {
    flex: 1,
    marginRight: 5,
    padding: 5,
    paddingLeft: 15,
    borderColor: '#dfd3df',
    borderWidth: 2,
  },
  title: {
    position: 'absolute',
    top: 1,
    textAlign: 'center',
    marginTop: 10,
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    padding: 5,
    backgroundColor: 'rgb(250,50,50)',
  },
});
