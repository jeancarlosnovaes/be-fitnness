import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";

// import Peso from "./Peso";
// import Idade from "./Idade";
// import Sexo from "./Sexo";
// import Altura from "./Altura";
// import UnidadeMedida from "./UnidadeMedida";

import styles from "./styles";

export default class Intro extends Component {
	state = {
		isIntro: true,
	};

	componentDidMount() {
		const { isIntro } = this.state;

		if (isIntro) {
			this.setState({ isIntro: true });
		} else {
			this.props.navigation.navigate("App");
		}
	}

	_handleJump = () => {
		this.props.navigation.navigate("Login");
	};

	_handleDoIt = () => {
		this.props.navigation.navigate("Sexo");
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#fff" barStyle="light-content" />
				<Image source={require("../../assets/Intro/intro.png")} />
				<Text style={styles.title}>Want Our Advice?</Text>
				<Text style={styles.description}>
					To give you best experience we would like to ask a few quick
					questions to set everything up for you.
				</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={this._handleDoIt}
				>
					<Text style={styles.buttonText}>Let's do it</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button2}
					onPress={this._handleJump}
				>
					<Text styles={styles.buttonText2}>Do it later</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
