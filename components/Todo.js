import React from 'react';
import { Text, View } from 'react-native';
import CheckBox from './CheckBox';
import Styles from './../Styles'
import {ListItem} from 'react-native-elements';

const Todo = ({ name, text, done, onChange }) => {
  return (
    <ListItem title={name} >
      <Text>{name}</Text>
      <Text>{text}</Text>
      <CheckBox checked={done} onChange={onChange} />
      <Text>...</Text>
    </ListItem>
  );
}

export default Todo;