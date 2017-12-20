import React, {Component} from 'react';
import {TextInput, View, Button} from 'react-native';
import styles from './styles';

export default class submitText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChangeText={(text) => this.props.onChangeText(text)}/>

        <Button
          style={styles.button}
          title={this.props.submitTitle}
          onPress={() => this.props.onSubmit()}/>
      </View>
    );
  }
}