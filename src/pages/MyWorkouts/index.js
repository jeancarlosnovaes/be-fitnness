import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

const data = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 },
];

export default class MyWorkouts extends Component {
	static navigationOptions = () => {
		return {
			headerStyle: {
				elevation: 0,
			},
			headerTintColor: "#5063EE",
		};
	};

	render() {
		return (
			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.myWorkouts}>
					<TouchableOpacity
						onPress={() => {}}
						style={styles.myWorkoutsCard}
					>
						<View style={styles.myWorkoutsCardTitle}>
							<Text style={styles.myWorkoutsCardTitleText}>
								Chest & Back
							</Text>
							<Text style={styles.myWorkoutsCardDate}>
								Mon, May 8
							</Text>
						</View>
						<View style={styles.myWorkoutsCardChart} />
						<View style={styles.myWorkoutsCardFotter}>
							<View style={styles.myWorkoutsCardInfo}>
								<Text
									style={
										styles.myWorkoutsCardFotterInfoNumber
									}
								>
									7
								</Text>
								<Text
									style={styles.myWorkoutsCardFotterInfoText}
								>
									times completed
								</Text>
							</View>
							<View style={styles.myWorkoutsCardButton}>
								<TouchableOpacity
									style={styles.myWorkoutsCardButtonRight}
									onPress={() => {}}
								>
									<Text
										style={
											styles.myWorkoutsCardButtonRightText
										}
									>
										Start
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.myWorkouts}>
					<TouchableOpacity
						onPress={() => {}}
						style={styles.myWorkoutsCard}
					>
						<View style={styles.myWorkoutsCardTitle}>
							<Text style={styles.myWorkoutsCardTitleText}>
								Bench & Press
							</Text>
							<Text style={styles.myWorkoutsCardDate}>
								Mon, May 8
							</Text>
						</View>
						<View style={styles.myWorkoutsCardChart} />
						<View style={styles.myWorkoutsCardFotter}>
							<View style={styles.myWorkoutsCardInfo}>
								<Text
									style={
										styles.myWorkoutsCardFotterInfoNumber
									}
								>
									7
								</Text>
								<Text
									style={styles.myWorkoutsCardFotterInfoText}
								>
									times completed
								</Text>
							</View>
							<View style={styles.myWorkoutsCardButton}>
								<TouchableOpacity
									style={styles.myWorkoutsCardButtonRight}
									onPress={() => {}}
								>
									<Text
										style={
											styles.myWorkoutsCardButtonRightText
										}
									>
										Start
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.myWorkouts}>
					<TouchableOpacity
						onPress={() => {}}
						style={styles.myWorkoutsCard}
					>
						<View style={styles.myWorkoutsCardTitle}>
							<Text style={styles.myWorkoutsCardTitleText}>
								Legs & Deltoids
							</Text>
							<Text style={styles.myWorkoutsCardDate}>
								Mon, May 8
							</Text>
						</View>
						<View style={styles.myWorkoutsCardChart} />
						<View style={styles.myWorkoutsCardFotter}>
							<View style={styles.myWorkoutsCardInfo}>
								<Text
									style={
										styles.myWorkoutsCardFotterInfoNumber
									}
								>
									7
								</Text>
								<Text
									style={styles.myWorkoutsCardFotterInfoText}
								>
									times completed
								</Text>
							</View>
							<View style={styles.myWorkoutsCardButton}>
								<TouchableOpacity
									style={styles.myWorkoutsCardButtonRight}
									onPress={() => {}}
								>
									<Text
										style={
											styles.myWorkoutsCardButtonRightText
										}
									>
										Start
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.myWorkouts}>
					<TouchableOpacity
						onPress={() => {}}
						style={styles.myWorkoutsCard}
					>
						<View style={styles.myWorkoutsCardTitle}>
							<Text style={styles.myWorkoutsCardTitleText}>
								Quads & Deltoids
							</Text>
							<Text style={styles.myWorkoutsCardDate}>
								Mon, May 8
							</Text>
						</View>
						<View style={styles.myWorkoutsCardChart} />
						<View style={styles.myWorkoutsCardFotter}>
							<View style={styles.myWorkoutsCardInfo}>
								<Text
									style={
										styles.myWorkoutsCardFotterInfoNumber
									}
								>
									7
								</Text>
								<Text
									style={styles.myWorkoutsCardFotterInfoText}
								>
									times completed
								</Text>
							</View>
							<View style={styles.myWorkoutsCardButton}>
								<TouchableOpacity
									style={styles.myWorkoutsCardButtonRight}
									onPress={() => {}}
								>
									<Text
										style={
											styles.myWorkoutsCardButtonRightText
										}
									>
										Start
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}
