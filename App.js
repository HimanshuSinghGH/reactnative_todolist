import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput , Button } from 'react-native';

export default function App() {
  
  const [inputTask , addTask] = useState("") ;
  const [taskList, addToList] = useState([]) ;
  
  const getinput = (input) => {
    addTask(input) ;
  };

  const printTask = () => {
    addToList(oldArray => [...oldArray,inputTask]) ;
    addTask("") ;
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
      <View style={styles.outputContainer} >
        { taskList.map((goals) => { return (<View style={styles.outputTask}><Text key={goals}>{goals}</Text></View>)}) }
      </View>
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

  outputContainer:{ 
    alignItems:"center"
  },

  outputTask:{
    width:"80%" ,

    backgroundColor:"grey" ,
    borderWidth:1,
    borderColor:"black",
    marginBottom:10,
    padding:10,
    
    
  }
  
});
