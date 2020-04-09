import React , {useState} from 'react' ;
import {View, TextInput, Button , StyleSheet , Modal} from 'react-native' ;


const GoalInput = props =>{
    
    const [inputTask , getTask] = useState("") ;

    const getinput = (input) => {
    getTask(input) ;
    };

    const appendTask = () => {
      props.onPressAdd(inputTask) ;
      getTask("") ;
      props.statefunc(false) ;
    }

    const cancelAdd = () => {
      props.statefunc(false) ;
    }
    
    return (
    <Modal visible={props.state}>
    <View style={styles.inputContainer}>
        <View>
          <TextInput placeholder="Enter Task" onChangeText={getinput} value={inputTask} style={styles.textBox}></TextInput>
        </View>
        <View style={styles.addButton}>
          <View style={styles.button}>
          <Button title="ADD" onPress={appendTask}/>
          </View>
          <View style={styles.button}>
          <Button title="CANCEL" onPress={cancelAdd} color="red"/>
          </View>
        </View>
    </View>
    </Modal>
    ) ;
}

const styles = StyleSheet.create({
    inputContainer:{
      flex:1 ,
      marginHorizontal: 20,
      justifyContent:"center"
      },

      textBox :{
        borderColor:"#D3D0D6",
        borderWidth:1,
        borderRadius:3,
        marginBottom:10,
        padding:5,
        shadowColor:"black",
        shadowOffset:{width:2 ,height:0},
        shadowRadius:1,
        shadowOpacity:.4
      },
    
      addButton:{
        flexDirection:"row",
        justifyContent:"space-between"
      },

      button:{
        flex:1,
      }
})

export default GoalInput ;