import React, { Component } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import ScrollPicker from "react-native-wheel-scroll-picker";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

export default class Altura extends Component {
	state = {
		altura: "",
	};

	_handleNext = async () => {
		const { altura } = this.state;

		if (!altura.length) {
			return;
		}
		if (altura.length) {
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
						dataSource={[
							"150 cm",
							"151 cm",
							"152 cm",
							"153 cm",
							"154 cm",
							"155 cm",
							"156 cm",
							"157 cm",
							"158 cm",
							"159 cm",
							"160 cm",
							"161 cm",
							"162 cm",
							"163 cm",
							"164 cm",
							"165 cm",
							"166 cm",
							"167 cm",
							"168 cm",
							"169 cm",
							"170 cm",
							"171 cm",
							"172 cm",
							"173 cm",
							"174 cm",
							"175 cm",
							"176 cm",
							"177 cm",
							"178 cm",
							"179 cm",
							"180 cm",
							"181 cm",
							"182 cm",
							"183 cm",
							"184 cm",
							"185 cm",
							"186 cm",
							"187 cm",
							"188 cm",
							"189 cm",
							"190 cm",
							"191 cm",
							"192 cm",
							"193 cm",
							"194 cm",
							"195 cm",
							"196 cm",
							"197 cm",
							"198 cm",
							"199 cm",
							"200 cm",
							"201 cm",
							"202 cm",
							"203 cm",
							"204 cm",
							"205 cm",
							"206 cm",
							"207 cm",
							"208 cm",
							"209 cm",
							"210 cm",
						]}
						selectedIndex={15}
						renderItem={(data, index, isSelected) => {}}
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
