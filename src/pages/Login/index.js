import React, { Component } from "react";

import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";

import styles from "./styles";

export default class Login extends Component {
	_handleSignUp = () => {
		this.props.navigation.navigate("Home");
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" backgroundColor="#fff" />
				<View style={styles.logo}>
					<Image source={require("../../assets/Login/k-logo.png")} />
				</View>
				<View style={styles.welcome}>
					<Text style={styles.welcomeText}>Welcome to BeFitness</Text>
					<Text style={styles.welcomeSmallText}>
						Sign Up to continue
					</Text>
				</View>
				<View style={styles.login}>
					<TouchableOpacity
						onPress={this._handleSignUp}
						style={styles.buttonSignUp}
					>
						<Text style={styles.buttonSignUpText}>Sign Up</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {}}
						style={styles.buttonSignUpFacebook}
					>
						<Text style={styles.buttonSignUpTextFacebook}>
							Sign Up With Facebook
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.signIn}>
					<Text style={styles.signInText}>
						Already have an account?
					</Text>
					<TouchableOpacity style={styles.buttonSignIn}>
						<Text style={styles.buttonSignInText}>Sign In</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
