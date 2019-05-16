import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

export default class ExerciseStatsDetails extends Component {
	_handleShowStatsDetails = () => {
		this.props.navigation.navigate("StatsDetails");
	};
	render() {
		return (
			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.title}>
					<Text style={styles.titleText}>Bench Press</Text>
				</View>
				<View style={styles.statsChart}>
					<TouchableOpacity
						onPress={this._handleShowStatsDetails}
						style={styles.statsChartCard}
					>
						<View style={styles.statsChartCardTitle}>
							<Text style={styles.statsChartCardTitleText}>
								Total Tonnage
							</Text>
						</View>
						<View style={styles.workoutTitle}>
							<Icon
								style={styles.icon}
								name="dumbbell"
								size={24}
								color="#fff"
							/>
							<Text style={styles.workoutTitleText}>43 060</Text>
							<Text style={styles.workoutUnits}>kg</Text>
						</View>
						<View style={styles.statsChartCardChart} />
					</TouchableOpacity>
				</View>
				<View style={styles.statsGlobal}>
					<View style={styles.stats}>
						<View style={styles.statsCompleted}>
							<View style={styles.statsIcon}>
								<Icon
									style={styles.icon}
									name="checkbox-marked-circle-outline"
									size={24}
									color="#fff"
								/>
							</View>
							<View style={styles.statsInfo}>
								<Text style={styles.statsNumber}>40</Text>
								<Text style={styles.statsCompletedText}>
									times performed
								</Text>
							</View>
						</View>
						<View style={styles.statsTonnage}>
							<View style={styles.statsIcon}>
								<Icon
									style={styles.icon}
									name="dumbbell"
									size={24}
									color="#fff"
								/>
							</View>
							<View style={styles.statsInfo}>
								<Text style={styles.statsNumber}>224560</Text>
								<Text style={styles.statsTonnageLiftedText}>
									repetitions done
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.stats}>
						<View style={styles.statsAvgWorkoutDuration}>
							<View style={styles.statsIcon}>
								<Icon
									style={styles.icon}
									name="clock-outline"
									size={24}
									color="#fff"
								/>
							</View>
							<View style={styles.statsInfo}>
								<Text style={styles.statsNumber}>
									01:18
									<Text style={styles.statsUnits}>h</Text>
								</Text>
								<Text
									style={styles.statsAvgWorkoutDurationText}
								>
									times spent
								</Text>
							</View>
						</View>
						<View style={styles.statsAvgRestTime}>
							<View style={styles.statsIcon}>
								<Icon
									style={styles.icon}
									name="timer-sand"
									size={24}
									color="#fff"
								/>
							</View>
							<View style={styles.statsInfo}>
								<Text style={styles.statsNumber}>
									02:32
									<Text style={styles.statsUnits}>min</Text>
								</Text>
								<Text style={styles.statsAvgRestTimeText}>
									avg rest time
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.stats}>
						<View style={styles.statsCurrentWeight}>
							<View style={styles.statsIcon}>
								<Icon
									style={styles.icon}
									name="dumbbell"
									size={24}
									color="#fff"
								/>
							</View>
							<View style={styles.statsInfo}>
								<Text style={styles.statsNumber}>
									130
									<Text style={styles.statsUnits}>kg</Text>
								</Text>
								<Text style={styles.statsCurrentWeightText}>
									best results
								</Text>
							</View>
						</View>
						<View style={styles.statsDistanceDone}>
							<View style={styles.statsIcon}>
								<Icon
									style={styles.icon}
									name="check"
									size={24}
									color="#fff"
								/>
							</View>
							<View style={styles.statsInfo}>
								<Text style={styles.statsNumber}>130*4</Text>
								<Text style={styles.statsDistanceDoneText}>
									best lift, kg * reps
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
}
