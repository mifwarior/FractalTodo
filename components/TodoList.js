import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './Todo';

const TodoList = ({todos}) => {
  const todoElements = todo.map((todo)=>{
    return (<Todo key={todo.id} {...todo} />);
  });
  return (
    <View> 
      {todoElements}
    </View>
  );
}

export default TodoList;