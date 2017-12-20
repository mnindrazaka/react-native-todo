import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';

export default class List extends Component {

  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          extraData={this.props}
          renderItem={({item}) => this.props.renderItem(item)}
        />
      </View>
    );
  }
}