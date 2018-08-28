import React from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles'

import { createStore } from 'redux';
import reducer from './reducers';
import TodoList from './containers/TodoList';
import { Provider } from 'react-redux'
import ButtonAdd from './components/Button';
import Header from './components/Header';
import {List, ListItem} from 'react-native-elements';
import Swipeable from './components/Swipeable';

const initialStore = {
  todos: [
    { id: 1, done: false, name: "name1", text: "text1", childs: [] },
    { id: 2, done: false, name: "name2", text: "text2", childs: [3, 4, 5] },
    { id: 3, done: false, name: "name3", text: "text3", childs: [] },
    { id: 4, done: false, name: "name4", text: "text4", childs: [] },
    { id: 5, done: false, name: "name5", text: "text5", childs: [] },
    { id: 6, done: false, name: "name6", text: "text6", childs: [] },
    { id: 7, done: false, name: "name7", text: "text7", childs: [] },
    { id: 8, done: false, name: "name8", text: "text8", childs: [] },
    { id: 9, done: false, name: "name9", text: "text9", childs: [] },
    { id: 10, done: false, name: "name10", text: "text10", childs: [] },
    { id: 11, done: false, name: "name11", text: "text11", childs: [] },
  ],
  activeTodo: 0
}
const store = createStore(reducer, initialStore.todos);


class App extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Header />
        <List>
          <ListItem title="test title"/>
          <Swipeable/>
        </List>
        <ButtonAdd />
      </View>
    );
  }
}

export default (props) => {
  return (
    <Provider store={store} children={<App />} />
  )
}
