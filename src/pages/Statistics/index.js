import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { BarChart, Grid, YAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";

import styles from "./styles";

export default class Statistics extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			tabBarIcon: ({ tintColor }) => (
				<Icon name="chart-bar" size={20} color={tintColor} />
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
					<Text style={styles.titleText}>Stats</Text>
				</View>
				<View style={styles.statsChart}>
					<View style={styles.statsChartCard}>
						<View style={styles.statsChartCardTitle}>
							<Text style={styles.statsChartCardTitleText}>
								Tonnage Lifted
							</Text>
						</View>
						<View style={styles.workoutTitle}>
							<Icon
								style={styles.icon}
								name="dumbbell"
								size={24}
								color="#fff"
							/>
							<Text style={styles.workoutTitleText}>224560</Text>
							<Text style={styles.workoutUnits}>kg</Text>
						</View>
						<View style={styles.statsChartCardChart}>
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
					</View>
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
								<Text style={styles.statsNumber}>72</Text>
								<Text style={styles.statsCompletedText}>
									workouts completed
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
								<Text style={styles.statsNumber}>
									224560
									<Text style={styles.statsUnits}>kg</Text>
								</Text>
								<Text style={styles.statsTonnageLiftedText}>
									tonnage lifted
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.stats}>
						<View style={styles.statsAvgWorkoutDuration}>
							<View style={styles.statsIcon}>
								<Icon
									style={styles.icon}
									name="progress-clock"
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
									avg workout duration
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
									name="scale-bathroom"
									size={24}
									color="#fff"
								/>
							</View>
							<View style={styles.statsInfo}>
								<Text style={styles.statsNumber}>
									77
									<Text style={styles.statsUnits}>kg</Text>
								</Text>
								<Text style={styles.statsCurrentWeightText}>
									current weight
								</Text>
							</View>
						</View>
						<View style={styles.statsDistanceDone}>
							<View style={styles.statsIcon}>
								<Icon
									style={styles.icon}
									name="map-marker-distance"
									size={24}
									color="#fff"
								/>
							</View>
							<View style={styles.statsInfo}>
								<Text style={styles.statsNumber}>
									56
									<Text style={styles.statsUnits}>km</Text>
								</Text>
								<Text style={styles.statsDistanceDoneText}>
									distance done
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.stats}>
						<View style={styles.statsLiftingTimeSpent}>
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
									92
									<Text style={styles.statsUnits}>h</Text>
								</Text>
								<Text style={styles.statsLiftingTimeSpentText}>
									lifting time spent
								</Text>
							</View>
						</View>
						<View style={styles.statsRunningTimeSpent}>
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
									07:22
									<Text style={styles.statsUnits}>h</Text>
								</Text>
								<Text style={styles.statsRunningTimeSpentText}>
									running time spent
								</Text>
							</View>
						</View>
					</View>
				</View>

				<View style={styles.keyLifts}>
					<View style={styles.keyLiftsLabels}>
						<Text style={styles.keyLiftsLabelText}>Key Lifts</Text>
					</View>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>
						<View style={styles.keyLiftsCard}>
							<View style={styles.keyLiftsCardTitle}>
								<Text style={styles.keyLiftsCardTitleText}>
									Bench Press
								</Text>
							</View>
							<View style={styles.keyLiftsInfo}>
								<Text style={styles.keyLiftsInfoText}>130</Text>
								<Text style={styles.keyLiftsInfoTextSmall}>
									kg
								</Text>
								<Text style={styles.keyLiftsInfoTextMiddle}>
									*
								</Text>
								<Text style={styles.keyLiftsInfoText}>6</Text>
								<Text style={styles.keyLiftsInfoTextSmall}>
									reps
								</Text>
							</View>
						</View>

						<View style={styles.keyLiftsCard}>
							<View style={styles.keyLiftsCardTitle}>
								<Text style={styles.keyLiftsCardTitleText}>
									Squats
								</Text>
							</View>
							<View style={styles.keyLiftsInfo}>
								<Text style={styles.keyLiftsInfoText}>100</Text>
								<Text style={styles.keyLiftsInfoTextSmall}>
									kg
								</Text>
								<Text style={styles.keyLiftsInfoTextMiddle}>
									*
								</Text>
								<Text style={styles.keyLiftsInfoText}>5</Text>
								<Text style={styles.keyLiftsInfoTextSmall}>
									reps
								</Text>
							</View>
						</View>
					</ScrollView>
				</View>
			</ScrollView>
		);
	}
}
