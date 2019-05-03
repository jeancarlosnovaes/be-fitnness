import React, { Component } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import ScrollPicker from "react-native-wheel-scroll-picker";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

export default class Altura extends Component {
	state = {
		altura: 160,
	};

	_handleNext = async () => {
		const { altura } = this.state;

		if (!altura) {
			return;
		}
		if (altura) {
			try {
				await AsyncStorage.setItem("@BeFitness:altura", altura);
			} catch (e) {
				// saving error
			}
		}
		this.props.navigation.navigate("Login");
	};

	_handleBack = () => {
		this.props.navigation.navigate("Peso");
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#fff" barStyle="light-content" />
				<View style={styles.count}>
					<Text style={styles.countText}>5 of 5</Text>
				</View>
				<View style={styles.tall}>
					<Text style={styles.tallTitle}>How tall are you?</Text>
					<Text style={styles.tallDescription}>
						This is used to set up reccommendations just for you.
					</Text>
				</View>
				<View style={styles.tallView}>
					<ScrollPicker
						ref={sp => {
							this.sp = sp;
						}}
						dataSource={[
							100,
							101,
							102,
							103,
							104,
							105,
							106,
							107,
							108,
							109,
							110,
							111,
							112,
							113,
							114,
							115,
							116,
							117,
							118,
							119,
							120,
							121,
							122,
							123,
							124,
							125,
							126,
							127,
							128,
							129,
							130,
							131,
							132,
							133,
							134,
							135,
							136,
							137,
							138,
							139,
							140,
							141,
							142,
							143,
							144,
							145,
							146,
							147,
							148,
							149,
							150,
							151,
							152,
							153,
							154,
							155,
							156,
							157,
							158,
							159,
							160,
							161,
							162,
							163,
							164,
							165,
							166,
							167,
							168,
							169,
							170,
							171,
							172,
							173,
							174,
							175,
							176,
							177,
							178,
							179,
							180,
							181,
							182,
							183,
							184,
							185,
							186,
							187,
							188,
							189,
							190,
							191,
							192,
							193,
							194,
							195,
							196,
							197,
							198,
							199,
							200,
							201,
							202,
							203,
							204,
							205,
							206,
							207,
							208,
							209,
							210,
						]}
						selectedIndex={60}
						onValueChange={(data, selectedIndex) => {
							this.setState({ altura: data });
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
							<Text style={styles.buttonNextText}>Finish</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}
