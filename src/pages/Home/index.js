import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";

const data = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 },
];

export default class Home extends Component {
	_handleMyWorkouts = () => {
		this.props.navigation.navigate("MyWorkouts");
	};

	render() {
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
								name="account"
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
								name="chevron-right"
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
							<TouchableOpacity onPress={this._handleMyWorkouts}>
								<Text style={styles.myWorkoutsButtonText}>
									Show All
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.myWorkoutsCard}>
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
					</View>
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
