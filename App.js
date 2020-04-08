import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput , Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [taskList, addToList] = useState([]) ;
  const [id , incrementId] = useState(1) ;

  const appendTask = goalTitle => {
    addToList(oldArray => [...oldArray, {key:id.toString() , value:goalTitle}]) ;
    incrementId(id+1)
    console.log(taskList) ;
  };

  const removeTask = goalId => {
    addToList( currentGoals => {
      return taskList.filter( (goals) => goals.key !== goalId )
    }) ;
   }
  
  return (
    <View style={styles.Container}>
      <GoalInput onPressAdd={appendTask}/>
      <FlatList data={taskList} renderItem={
        listItems => <GoalItem id={listItems.item.key} task={listItems.item.value} onDelete={removeTask}/>
      }/>
    </View>
  ) ;
}

const styles = StyleSheet.create({
  Container :{
    marginTop:30 ,

  },
  
});
