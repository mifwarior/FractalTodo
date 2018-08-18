import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({todos, onChange}) => {
  
  const todoElements = todos.map((todo)=>{
    return (<Todo key={todo.id} {...todo} onChange={(done)=>{ onChange(todo.id, done)}} />);
  });
  return (
    <View> 
      {todoElements}
    </View>
  );
}

export default TodoList;