import React, { Component } from "react";

import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import { Container } from './styles';

export default class Statistics extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			tabBarIcon: () => <Icon name="chart-bar" size={20} color="#000" />,
		};
	};
	render() {
		return <View />;
	}
}
