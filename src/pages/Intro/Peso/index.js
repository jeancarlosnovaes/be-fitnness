import React, { Component } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/Ionicons";
import RNListSlider from "react-native-list-slider";

import styles from "./styles";

export default class Peso extends Component {
	state = {
		peso: 67,
	};

	_handleNext = async () => {
		const { peso } = this.state;

		if (!peso) {
			return;
		}
		if (peso) {
			try {
				await AsyncStorage.setItem("@BeFitness:peso", peso);
			} catch (e) {
				// saving error
			}
		}
		this.props.navigation.navigate("Altura");
	};

	_handleBack = () => {
		this.props.navigation.navigate("UnidadeMedida");
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#fff" barStyle="light-content" />
				<View style={styles.count}>
					<Text style={styles.countText}>4 of 5</Text>
				</View>
				<View style={styles.weight}>
					<Text style={styles.weightTitle}>
						How much do you weigh?
					</Text>
					<Text style={styles.weightDescription}>
						This is used to set up reccommendations just for you.
					</Text>
				</View>
				<View style={styles.weightView}>
					<View style={styles.container}>
						<View style={styles.weightInfo}>
							<Text style={styles.weightBigText}>
								{this.state.peso}
							</Text>
							<Text style={styles.weightSmallText}>kg</Text>
						</View>
						<RNListSlider
							value={this.state.peso}
							onValueChange={peso => this.setState({ peso })}
							mainContainerStyle={styles.mainContainerStyle}
							thumbStyle={styles.thumbStyle}
							itemStyle={styles.itemStyle}
							tenthItemStyle={styles.tenthItemStyle}
						/>
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
