import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { BarChart, Grid, YAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";

import styles from "./styles";

export default class Home extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			tabBarIcon: ({ tintColor }) => (
				<Icon name="ios-home" size={20} color={tintColor} />
			),
		};
	};

	render() {
		const data = [
			{
				value: 100,
				svg: {
					fill: "#5063EE",
				},
			},
			{
				value: 20,
				svg: {
					fill: "#7081FF",
				},
			},
			{
				value: 30,
				svg: {
					fill: "#5063EE",
				},
			},
			{
				value: 50,
				svg: {
					fill: "#7081FF",
				},
			},
			{
				value: 40,
				svg: {
					fill: "#5063EE",
				},
			},
			{
				value: 80,
				svg: {
					fill: "#7081FF",
				},
			},
		];

		return (
			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.title}>
					<Text style={styles.titleText}>Dashboard</Text>
					<View style={styles.buttonView}>
						<TouchableOpacity
							style={styles.button}
							onPress={() => {}}
						>
							<Icon
								name="ios-person"
								size={24}
								style={styles.buttonIcon}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.basicStats}>
					<View style={styles.completed}>
						<Text style={styles.completedWorkoutNumber}>0</Text>
						<Text style={styles.completedWorkoutText}>
							workouts completed
						</Text>
					</View>
					<View style={styles.tonnage}>
						<Text style={styles.tonnageLiftedNumber}>
							0<Text style={styles.tonnageLiftedUnits}>kg</Text>
						</Text>

						<Text style={styles.tonnageLiftedText}>
							tonnage lifted
						</Text>
					</View>
					<View style={styles.currentWeight}>
						<Text style={styles.currentWeightNumber}>
							70<Text style={styles.currentWeightUnits}>kg</Text>
						</Text>
						<Text style={styles.currentWeightText}>
							current weight
						</Text>
					</View>
				</View>
				<View style={styles.previewsWorkout}>
					<View style={styles.date}>
						<Text style={styles.dateNumber}>22</Text>
						<Text style={styles.dateText}>may</Text>
					</View>
					<View style={styles.previewsTitle}>
						<Text style={styles.previewsTitleText}>
							Previews Workout
						</Text>
						<Text style={styles.previewsExerciseTitle}>
							Quads & Deltoids
						</Text>
						<Text style={styles.previewsInfo}>
							7 exercise completed
						</Text>
					</View>
					<View style={styles.previewsWorkoutIcon}>
						<TouchableOpacity onPress={() => {}}>
							<Icon
								name="ios-arrow-forward"
								size={24}
								style={styles.previewsIcon}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.myWorkouts}>
					<View style={styles.myWorkoutsLabels}>
						<Text style={styles.myWorkoutsLabelLeft}>
							My Workouts
						</Text>
						<View style={styles.myWorkoutsLabelButton}>
							<TouchableOpacity onPress={() => {}}>
								<Text style={styles.myWorkoutsButtonText}>
									Show All
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<LinearGradient
						colors={["#23253A", "#5063EE"]}
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
						<View style={styles.myWorkoutsCardChart}>
							<YAxis
								style={{ marginLeft: 5 }}
								data={data}
								yAccessor={({ item }) => item.value}
								contentInset={{ top: 8, bottom: 8 }}
								numberOfTicks={4}
								svg={{
									fill: "#FEFEFE",
									fontSize: 12,
									textAlign: "left",
									opacity: 0.6,
								}}
							/>
							<BarChart
								style={{ flex: 1, marginLeft: 5 }}
								data={data}
								horizontal={false}
								yAccessor={({ item }) => item.value}
								gridMin={0}
								spacingInner={0}
								spacingOuter={0}
								contentInset={{
									top: 5,
									bottom: 5,
									left: 5,
									right: 5,
								}}
								animate={true}
								animationDuration={300}
							/>
						</View>
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
							<LinearGradient
								colors={["#23253A", "#5063EE"]}
								style={styles.myWorkoutsCardButton}
							>
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
							</LinearGradient>
						</View>
					</LinearGradient>
				</View>
				<View style={styles.myWorkoutsInfo}>
					<Text style={styles.myWorkoutsInfoText}>
						You have no workouts yet. Go on and create your first
						one!
					</Text>
				</View>
				<View style={styles.createWorkouts}>
					<TouchableOpacity
						onPress={() => {}}
						style={styles.buttonCreateWorkouts}
					>
						<Text style={styles.buttonCreateWorkoutsText}>
							Create Workouts
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}
