import React from 'react';
import { StyleSheet, Text, Switch, View } from 'react-native';

const CheckBox = ({checked, onChange}) => {
  return (
    <View>
      <Switch value={checked} onValueChange={onChange}/>
    </View>
  );
}

export default CheckBox;