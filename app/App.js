import React, {Component} from 'react';
import SubmitText from './components/SubmitText';
import Header from './components/Header';
import List from './components/List';
import ListItem from './components/ListItem';
import {View, StyleSheet} from 'react-native';
import uuid from 'uuid/v4';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			todoText: '',
			todoList: []
		};
	}

	changeTodoText(text) {
		this.setState({
			todoText: text
		});
	}

	addTodo() {
		let todoList = this.state.todoList;
		todoList.push({
			key: uuid(),
			todo: this.state.todoText
		});
		this.setState({
			todoText: '',
			todoList
		});
	}

	deleteTodo(key) {
		let todoList = this.state.todoList;
		todoList = todoList.filter(row => {
			return row.key !== key;
		});
		this.setState({
			todoList
		});
	}

	renderItem(item) {
		return (
			<ListItem
				text={item.todo}
				onPress={() => this.deleteTodo(item.key)}/>
		);
	}

	render() {
    console.log(this.state.todoList);
		return (
			<View style={styles.container}>
				<Header title={'Todo App'} />

				<SubmitText
					placeholder={'Yang saya kerjakan...'}
					submitTitle={'Simpan'}
					value={this.state.todoText}
					onChangeText={(text) => this.changeTodoText(text)}
					onSubmit={() => this.addTodo()}/>

				<List
					data={this.state.todoList}
					renderItem={(item) => this.renderItem(item)}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 5
	}
});