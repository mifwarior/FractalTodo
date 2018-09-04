import React from 'react';
import { View, ScrollView } from 'react-native';
import Todo from './Todo';
import { List, ListItem } from 'react-native-elements';
import Styles from './../Styles'
//<ListItem title="test title" onPress={()=>{console.log("onPress")}}/>
const TodoList = ({ todos, onDone, onInto }) => {

  const todoElements = todos.map(({ id, name, text, done }) => {
    return (<ListItem
      key={id} 
      title={name} 
      subtitle={text} 
      onPress={() => { onInto(id) }} 
      onLongPress={() => { onDone(id, !done) }} />);
  });
  return (
    <View style={Styles.list}>
      <ScrollView>
        <List>
          {todoElements}
        </List>
      </ScrollView>
    </View>
  );
}

export default TodoList;