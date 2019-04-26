import React, { Component } from "react";

import { View, StyleSheet, Text } from "react-native";

// import { Container } from './styles';

export default class Login extends Component {
	render() {
		return (
			<View>
				<Text style={styles.red}>Login</Text>
				<Text style={styles.bigBlue}>just bigBlue</Text>
				<Text style={[styles.bigBlue, styles.red]}>
					bigBlue, then red
				</Text>
				<Text style={[styles.red, styles.bigBlue]}>
					red, then bigBlue
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bigBlue: {
		color: "blue",
		fontWeight: "bold",
		fontSize: 30,
	},
	red: {
		color: "red",
	},
});
