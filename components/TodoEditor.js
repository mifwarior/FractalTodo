import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CheckBox from './CheckBox';
import Styles from './../Styles'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';




class TodoEditor extends Component {

  constructor(...args){
    super(...args);

    this.state = {
      name: "",
      text: "",
      done: false,
    }

    this.ChangeName = (name)=>{
      const state = {
        ...this.state,
        name
      }
      this.setState(state);
    };

    this.ChangeText = (text)=>{
      const state = {
        ...this.state,
        text
      }
      this.setState(state);
    };

    this.ChangeDone = (done)=>{
      const state = {
        ...this.state,
        done
      }
      this.setState(state);
    };

  }
  render() {
    //const { name, text, done, onChange } = this.props;
    
    const { done} = this.state;
    const { ChangeName, ChangeText, ChangeDone} = this;

    return (
      <View>
        <Sae
          label={'Title'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'white'}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
          onChange={ChangeName}
        />

        <Sae
          label={'Text'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'white'}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
          onChange={ChangeText}
        />

        <CheckBox checked={done} onChange={ChangeDone} />
      </View>
    );
  }
}

export default TodoEditor;