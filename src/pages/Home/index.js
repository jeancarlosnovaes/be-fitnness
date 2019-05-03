import React, { Component } from "react";

import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

export default class Home extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			tabBarIcon: () => <Icon name="ios-home" size={20} color="#000" />,
		};
	};

	render() {
		return (
			<ScrollView style={styles.container}>
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
					<Text />
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
