import React from 'react';
import {View,Text, StyleSheet,TouchableOpacity} from 'react-native'; 
import {useState} from 'react';
import styles from './StyleSheet'

const task =(props)=>{
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask =(index)=> {
    setTaskItems([...taskItems, task])
    setTask(null); 
  }

  const completeTask =(index)=> {
    let ItemsCopy =[...taskItems];
    ItemsCopy.splice(index, 1);
    setTaskItems (ItemsCopy);
  }
  return(
    <View style={styles.item}>

      <View style={styles.itemLeft}>
        <View style={styles.kotak}> </View>
        <Text style={styles.itemText} > {props.text} </Text>
      </View>
    </View>
    
  )
}

export default task;
