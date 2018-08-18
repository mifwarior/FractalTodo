import React from 'react';
import { StyleSheet, Text, Switch, View } from 'react-native';
import Styles from './../Styles'
const Header = () => {
  
  return (
    <View style={Styles.header}>
      <Text style={Styles.title}>FractalTodo</Text>
    </View>
  );
}

export default Header;