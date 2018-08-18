import React from 'react';
import { Text, View } from 'react-native';
import CheckBox from './CheckBox';
import Styles from './../Styles'

const Todo = ({ name, text, done, onChange }) => {
  return (
    <View style={Styles.todo}>
      <Text>{name}</Text>
      <Text>{text}</Text>
      <CheckBox checked={done} onChange={onChange} />
      <Text>...</Text>
    </View>
  );
}

export default Todo;