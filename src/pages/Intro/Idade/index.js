import React, { Component } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import ScrollPicker from "react-native-wheel-scroll-picker";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

export default class Idade extends Component {
	state = {
		idade: 25,
	};

	_handleNext = async () => {
		const { idade } = this.state;

		if (!idade) {
			return;
		}
		if (idade) {
			try {
				await AsyncStorage.setItem("@BeFitness:idade", idade);
			} catch (e) {
				// saving error
			}
		}
		this.props.navigation.navigate("UnidadeMedida");
	};

	_handleBack = () => {
		this.props.navigation.navigate("Sexo");
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#fff" barStyle="light-content" />
				<View style={styles.count}>
					<Text style={styles.countText}>2 of 5</Text>
				</View>
				<View style={styles.age}>
					<Text style={styles.ageTitle}>How old are you?</Text>
					<Text style={styles.ageDescription}>
						This is used to make better suggestions on workouts and
						plans.
					</Text>
				</View>
				<View style={styles.ageView}>
					<ScrollPicker
						dataSource={[
							10,
							11,
							12,
							13,
							14,
							15,
							16,
							17,
							18,
							19,
							20,
							21,
							22,
							23,
							24,
							25,
							26,
							27,
							28,
							29,
							30,
							31,
							32,
							33,
							34,
							35,
							36,
							37,
							38,
							39,
							40,
							41,
							42,
							43,
							44,
							45,
							46,
							47,
							48,
							49,
							50,
							51,
							52,
							53,
							54,
							55,
							56,
							57,
							58,
							59,
							60,
							61,
							62,
							63,
							64,
							65,
							66,
							67,
							68,
							69,
							70,
							71,
							72,
							73,
							74,
							75,
							76,
							77,
							78,
							79,
							80,
							81,
							82,
							83,
							84,
							85,
							86,
							87,
							88,
							89,
							90,
							91,
							92,
							93,
							94,
							95,
							96,
							97,
							98,
							99,
							100,
						]}
						selectedIndex={15}
						onValueChange={(data, selectedIndex) => {
							this.setState({ idade: data });
						}}
						wrapperHeight={180}
						wrapperWidth={150}
						wrapperBackground={"#FFFFFF"}
						itemHeight={60}
						highlightColor={"#5063EE"}
						highlightBorderWidth={2}
						activeItemColor={"#484856"}
						itemColor={"#26262B"}
					/>
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
