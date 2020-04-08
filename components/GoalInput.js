import React , {useState} from 'react' ;
import {View, TextInput, Button , StyleSheet} from 'react-native' ;


const GoalInput = props =>{
    
    const [inputTask , getTask] = useState("") ;

    const getinput = (input) => {
    getTask(input) ;
    };
    
    return (
    <View style={styles.inputContainer}>
        <View style={styles.textBox}>
          <TextInput placeholder="Enter Task" onChangeText={getinput} value={inputTask}></TextInput>
        </View>
        <View style={styles.addButton}>
          <Button title="ADD" onPress={props.onPressAdd.bind(this,inputTask)}></Button>
        </View>
    </View>
    ) ;
}

const styles = StyleSheet.create({
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
})

export default GoalInput ;