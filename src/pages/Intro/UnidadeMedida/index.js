import React, { Component } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

export default class UnidadeMedida extends Component {
	state = {
		unidademedida: "",
		isCheckingMetric: false,
		isCheckingEnglish: false,
	};

	_handleNext = async () => {
		const { unidademedida } = this.state;

		if (!unidademedida.length) {
			return;
		}

		if (unidademedida.length) {
			try {
				await AsyncStorage.setItem(
					"@BeFitness:unidademedida",
					unidademedida,
				);
			} catch (e) {
				// saving error
			}
		}
		this.props.navigation.navigate("Peso");
	};

	_handleBack = () => {
		this.props.navigation.navigate("Idade");
	};

	_chekingEnglish = () => {
		this.setState({
			isCheckingEnglish: true,
			unidademedida: "english",
			isCheckingMetric: false,
		});
	};

	_chekingMetric = () => {
		this.setState({
			isCheckingMetric: true,
			unidademedida: "metric",
			isCheckingEnglish: false,
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#fff" barStyle="light-content" />
				<View style={styles.count}>
					<Text style={styles.countText}>3 of 5</Text>
				</View>
				<View style={styles.units}>
					<Text style={styles.unitsTitle}>Units of measurement</Text>
					<Text style={styles.unitsDescription}>
						Which system of units would you like to use?
					</Text>
				</View>
				<View style={styles.unitsView}>
					<View style={styles.unitsItem}>
						<TouchableOpacity
							style={styles.buttonUnits}
							onPress={this._chekingEnglish}
						>
							<Text style={styles.unitsText}>
								English (lbs, pounds)
							</Text>
							<View style={styles.unitsTextIcon}>
								{this.state.isCheckingEnglish ? (
									<Icon
										name="ios-checkmark"
										size={24}
										color="#5063EE"
										style={styles.icon}
									/>
								) : null}
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.unitsItem}>
						<TouchableOpacity
							style={styles.buttonUnits}
							onPress={this._chekingMetric}
						>
							<Text style={styles.unitsText}>
								Metric (kg, cm){" "}
							</Text>
							<View style={styles.unitsTextIcon}>
								{this.state.isCheckingMetric ? (
									<Icon
										name="ios-checkmark"
										size={24}
										color="#5063EE"
										style={styles.icon}
									/>
								) : null}
							</View>
						</TouchableOpacity>
					</View>
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
