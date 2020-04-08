import React from 'react' ;
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native' ;

const GoalItem = props => {

    return (
       <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.outputTask}>
          <Text>{props.task}</Text>
        </View>
       </TouchableOpacity> 
    ) 
};

const styles = StyleSheet.create({
    
    outputTask: {
    marginHorizontal:30 ,
    backgroundColor:"grey" ,
    borderWidth:1,
    borderColor:"black",
    marginBottom:10,
    padding:10,
    }
}) ;

export default GoalItem ;