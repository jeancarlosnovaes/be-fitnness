import React, { Component } from "react";

import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import { Container } from './styles';

export default class PlansLibrary extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			tabBarIcon: ({ tintColor }) => (
				<Icon name="clipboard-text-outline" size={20} color={tintColor} />
			),
		};
	};
	render() {
		return <View />;
	}
}
