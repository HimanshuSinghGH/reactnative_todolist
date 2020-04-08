import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput , Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItems';

export default function App() {
  
  const [id , incrementId] = useState(1) ;
  const [inputTask , addTask] = useState("") ;
  const [taskList, addToList] = useState([]) ;
  
  const getinput = (input) => {
    addTask(input) ;
  };

  const printTask = () => {
    addToList(oldArray => [...oldArray, {key:id.toString() , value:inputTask}]) ;
    addTask("") ;
    incrementId(id+1)
    console.log(taskList) ;
  };
  
  return (
    <View style={styles.Container}>
      <View style={styles.inputContainer}>
        <View style={styles.textBox}>
          <TextInput placeholder="Enter Task" onChangeText={getinput} value={inputTask}></TextInput>
        </View>
        <View style={styles.addButton}>
          <Button title="ADD" onPress={printTask}></Button>
        </View>
      </View>
        <FlatList data={taskList} renderItem={
          listItems => <GoalItem task={listItems.item.value}/>
        }/>
    </View>
  ) ;
}

const styles = StyleSheet.create({
  Container :{
    marginTop:30 ,

  },
  
  inputContainer:{
    flexDirection:"row" ,
    padding:30,
    paddingBottom:20

  },

  textBox :{
    flex:4 ,
    marginRight:5,
  },

  addButton:{
    flex:1,
  },
  
});
