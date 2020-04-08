import React from 'react' ;
import {View,Text, StyleSheet} from 'react-native' ;

const GoalItem = props => {

    return (
        <View style={styles.outputTask}>
          <Text>{props.task}</Text>
        </View>
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