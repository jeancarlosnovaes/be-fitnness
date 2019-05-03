import React, { Component } from "react";

import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import { Container } from './styles';

export default class PlansLibrary extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			tabBarIcon: () => (
				<Icon name="clipboard-text-outline" size={20} color="#000" />
			),
		};
	};
	render() {
		return <View />;
	}
}
