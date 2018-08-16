import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from './CheckBox';

const Todo = ({name, text, done}) => {
  return (
    <View> 
      <Text>{name}</Text>
      <Text>{text}</Text>
      <CheckBox checked={false} onClick={()=>{}}/>
    </View>
  );
}

export default Todo;