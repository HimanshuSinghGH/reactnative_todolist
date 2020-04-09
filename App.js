import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput , Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [taskList, addToList] = useState([]) ;
  const [id , incrementId] = useState(1) ;
  const [isAddState , setisAddState] = useState(false) ;

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
      <View style={styles.addTaskButton}>
        <Button title="Add New Task" onPress={() => setisAddState(true)}></Button>
      </View>
      <GoalInput onPressAdd={appendTask} state={isAddState} statefunc={setisAddState}/>
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
  
  addTaskButton :{
    marginHorizontal:30,
    marginBottom : 10 , 
  }
});
