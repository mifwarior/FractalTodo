import React from 'react';
import { Button } from 'react-native';

import Styles from './../Styles'

const ButtonAdd = ({onClick = ()=>{}}) => {
  return (
    <Button styles={Styles.buttonAddTodo} onPress={()=>{}} onClick={onClick} title={"Add"}/>
  );
}

export default ButtonAdd;