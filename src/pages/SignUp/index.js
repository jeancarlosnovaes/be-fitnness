import React, { Component } from "react";

import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Keyboard,
	StatusBar,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

export default class SignUp extends Component {
	state = {
		username: "",
		email: "",
		password: "",
	};

	static navigationOptions = {
		headerStyle: {
			backgroundColor: "#23253A",
			height: 56,
		},
	};

	_handleUsernameChange = username => {
		this.setState({ username });
	};

	_handleEmailChange = email => {
		this.setState({ email });
	};

	_handlePasswordChange = password => {
		this.setState({ password });
	};

	_handleSubmit = async () => {
		const { username, email, password } = this.state;

		if (!username.length || !email.length || !password.length) {
			return;
		}

		if (username.length && email.length && password.length) {
			try {
				await AsyncStorage.setItem("@BeFitness:username", username);
				await AsyncStorage.setItem("@BeFitness:email", email);
				await AsyncStorage.setItem("@BeFitness:password", password);
			} catch (error) {}
		}

		this.props.navigation.navigate("Login");
	};

	render() {
		return (
			<LinearGradient
				colors={["#23253A", "#5063EE"]}
				style={styles.linearGradient}
			>
				<View style={styles.container}>
					<StatusBar
						barStyle="light-content"
						backgroundColor="#6a51ae"
					/>
					<View style={styles.viewText}>
						<Text style={styles.text}>Sign Up</Text>
					</View>
					<View style={styles.form}>
						<TextInput
							style={styles.input}
							placeholder="Username"
							placeholderTextColor="#fff"
							value={this.state.username}
							spellCheck={false}
							autoCorrect={false}
							autoCapitalize="none"
							maxLength={40}
							onBlur={Keyboard.dismiss}
							onChangeText={this._handleUsernameChange}
						/>
						<TextInput
							style={styles.input}
							placeholder="Email"
							placeholderTextColor="#fff"
							value={this.state.email}
							spellCheck={false}
							autoCorrect={false}
							autoCapitalize="none"
							keyboardType="email-address"
							onBlur={Keyboard.dismiss}
							onChangeText={this._handleEmailChange}
						/>

						<TextInput
							style={styles.input}
							placeholder="Password"
							placeholderTextColor="#fff"
							value={this.state.password}
							spellCheck={false}
							autoCorrect={false}
							autoCapitalize="none"
							onBlur={Keyboard.dismiss}
							onChangeText={this._handlePasswordChange}
						/>
					</View>
					<View style={styles.term}>
						<Text style={styles.termText}>
							By signing up you agree to our Terms and
							PrivacyPolicy
						</Text>
					</View>
					<View style={styles.button}>
						<TouchableOpacity
							onPress={this._handleSubmit}
							style={styles.buttonSignUp}
						>
							<Text style={styles.buttonText}>Sign Up</Text>
						</TouchableOpacity>
					</View>
				</View>
			</LinearGradient>
		);
	}
}
