import React, { Component } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

export default class Sexo extends Component {
	state = {
		manPressed: false,
		womanPressed: false,
		sexo: "",
	};

	_handleIconManPressed = () => {
		this.setState({ manPressed: true });
		this.setState({ womanPressed: false });
	};

	_handleIconWomanPressed = () => {
		this.setState({ womanPressed: true });
		this.setState({ manPressed: false });
	};

	_handleNext = async () => {
		if (!this.state.manPressed && !this.state.womanPressed) {
			return;
		}
		if (this.state.manPressed) {
			this.setState({ sexo: "masculino" });
			try {
				await AsyncStorage.setItem("@BeFitness:sexo", "masculino");
			} catch (e) {
				// saving error
			}
		}

		if (this.state.womanPressed) {
			this.setState({ sexo: "feminino" });
			try {
				await AsyncStorage.setItem("@BeFitness:sexo", "feminino");
			} catch (e) {
				// saving error
			}
		}

		this.props.navigation.navigate("Idade");
	};

	_handleBack = () => {
		this.props.navigation.navigate("Intro");
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#fff" barStyle="light-content" />
				<View style={styles.count}>
					<Text style={styles.countText}>1 of 5</Text>
				</View>
				<View style={styles.gender}>
					<Text style={styles.genderTitle}>Male or female?</Text>
					<Text style={styles.genderDescription}>
						Certainly, men and women need different workout
						approaches.
					</Text>
				</View>
				<View style={styles.genderView}>
					<TouchableOpacity
						onPressIn={this._handleIconManPressed}
						style={
							this.state.manPressed
								? styles.genderIconTouchPressed
								: styles.genderIconTouch
						}
					>
						<Icon
							name="ios-man"
							size={50}
							color={this.state.manPressed ? "#fff" : "#7081FF"}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this._handleIconWomanPressed}
						style={
							this.state.womanPressed
								? styles.genderIconTouchPressed
								: styles.genderIconTouch
						}
					>
						<Icon
							name="ios-woman"
							size={50}
							color={this.state.womanPressed ? "#fff" : "#7081FF"}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.button}>
					<View style={styles.buttonBack}>
						<TouchableOpacity onPress={this._handleBack}>
							<Icon
								name="ios-arrow-round-back"
								size={50}
								color="#888"
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.buttonNext}>
						<TouchableOpacity onPress={this._handleNext}>
							<Text style={styles.buttonNextText}>Continue</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}
