import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';


// You can import from local files
import Task from './components/Task';
import styles from './components/StyleSheet';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = (index) => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let ItemsCopy = [...taskItems];
    ItemsCopy.splice(index, 1);
    setTaskItems(ItemsCopy);
  };

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.judul}> Tugas</Text>
          <Text style={styles.judul2}> Kuliah</Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
        </View>

        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask()}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboard}>
        <TextInput
          style={styles.input}
          placeholder={'Tulis disini'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.lingkaran}>
            <AntDesign
              name="plus"
              size={24}
              color="black"
              style={styles.addButton}
            />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
