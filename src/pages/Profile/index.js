import React, { Component } from "react";

import { ScrollView, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

export default class Profile extends Component {
	static navigationOptions = () => {
		return {
			headerStyle: {
				backgroundColor: "#272B4B",
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
				<View style={styles.header}>
					<View sytle={styles.title}>
						<Text style={styles.name}>Wade Watts</Text>
					</View>
					<View style={styles.currentPlan}>
						<Text style={styles.label}>Current Plan</Text>
						<Text style={styles.titlePlan}>
							The Complete 4-week Beginner Plan
						</Text>
						<View style={styles.progress}>
							<Text style={styles.progressText}>
								30% completed
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.basicStats}>
					<View style={styles.completed}>
						<Text style={styles.completedWorkoutNumber}>25</Text>
						<Text style={styles.completedWorkoutText}>
							workouts completed
						</Text>
					</View>
					<View style={styles.tonnage}>
						<Text style={styles.tonnageLiftedNumber}>
							103k
							<Text style={styles.tonnageLiftedUnits}>kg</Text>
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
				<View style={styles.list}>
					<View style={styles.listItem}>
						<Text style={styles.listItemText}>
							Account Settings
						</Text>
						<Icon
							name="chevron-right"
							size={24}
							style={styles.icon}
						/>
					</View>
					<View style={styles.listItem}>
						<Text style={styles.listItemText}>Edit Profile</Text>
						<Icon
							name="chevron-right"
							size={24}
							style={styles.icon}
						/>
					</View>
					<View style={styles.listItem}>
						<Text style={styles.listItemText}>Invite Friends</Text>
						<Icon
							name="chevron-right"
							size={24}
							style={styles.icon}
						/>
					</View>
				</View>
			</ScrollView>
		);
	}
}
