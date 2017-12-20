import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class ListItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.onPress()}>
        <View>
          <Text>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}