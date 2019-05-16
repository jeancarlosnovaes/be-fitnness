import React, { Component } from "react";
import {
	View,
	ScrollView,
	Text,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TextInput,
	Image,
} from "react-native";

// import StatisticsExerciseSpecific from "../Statistics/StatisticsExerciseSpecific";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";

export default class Statistics extends Component {
	state = {
		showTabs: 0,
	};

	_handleShowStatsDetails = () => {
		this.props.navigation.navigate("StatsDetails");
	};

	_handleExerciseStatsDetails = () => {
		this.props.navigation.navigate("ExerciseStatsDetails");
	};

	_handleTabPressed = () => {
		const { showTabs } = this.state;
		if (showTabs === 0) {
			this.setState({ showTabs: 1 });
		} else {
			this.setState({ showTabs: 0 });
		}
	};

	render() {
		return (
			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.title}>
					<Text style={styles.titleText}>Statistics</Text>
				</View>
				<View style={styles.tabs}>
					<TouchableWithoutFeedback
						activeOpacity={1}
						onPress={this._handleTabPressed}
						style={styles.buttonTab}
					>
						<Text
							style={
								this.state.showTabs === 0
									? styles.textTabsActive
									: styles.textTabsInactive
							}
						>
							Global stats
						</Text>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback
						activeOpacity={1}
						style={styles.buttonTab}
						onPress={this._handleTabPressed}
					>
						<Text
							style={
								this.state.showTabs === 1
									? styles.textTabsActive
									: styles.textTabsInactive
							}
						>
							Exercise specific
						</Text>
					</TouchableWithoutFeedback>
				</View>

				{this.state.showTabs === 0 ? (
					<View>
						<View style={styles.statsChart}>
							<TouchableOpacity
								onPress={this._handleShowStatsDetails}
								style={styles.statsChartCard}
							>
								<View style={styles.statsChartCardTitle}>
									<Text
										style={styles.statsChartCardTitleText}
									>
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
									<Text style={styles.workoutTitleText}>
										224560
									</Text>
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
										<Text style={styles.statsNumber}>
											72
										</Text>
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
											<Text style={styles.statsUnits}>
												kg
											</Text>
										</Text>
										<Text
											style={
												styles.statsTonnageLiftedText
											}
										>
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
											<Text style={styles.statsUnits}>
												h
											</Text>
										</Text>
										<Text
											style={
												styles.statsAvgWorkoutDurationText
											}
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
											<Text style={styles.statsUnits}>
												min
											</Text>
										</Text>
										<Text
											style={styles.statsAvgRestTimeText}
										>
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
											<Text style={styles.statsUnits}>
												kg
											</Text>
										</Text>
										<Text
											style={
												styles.statsCurrentWeightText
											}
										>
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
											<Text style={styles.statsUnits}>
												km
											</Text>
										</Text>
										<Text
											style={styles.statsDistanceDoneText}
										>
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
											<Text style={styles.statsUnits}>
												h
											</Text>
										</Text>
										<Text
											style={
												styles.statsLiftingTimeSpentText
											}
										>
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
											<Text style={styles.statsUnits}>
												h
											</Text>
										</Text>
										<Text
											style={
												styles.statsRunningTimeSpentText
											}
										>
											running time spent
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View style={styles.keyLifts}>
							<View style={styles.keyLiftsLabels}>
								<Text style={styles.keyLiftsLabelText}>
									Key Lifts
								</Text>
							</View>
							<ScrollView
								horizontal={true}
								showsHorizontalScrollIndicator={false}
							>
								<View style={styles.keyLiftsCard}>
									<View style={styles.keyLiftsCardTitle}>
										<Text
											style={styles.keyLiftsCardTitleText}
										>
											Bench Press
										</Text>
									</View>
									<View style={styles.keyLiftsInfo}>
										<Text style={styles.keyLiftsInfoText}>
											130
										</Text>
										<Text
											style={styles.keyLiftsInfoTextSmall}
										>
											kg
										</Text>
										<Text
											style={
												styles.keyLiftsInfoTextMiddle
											}
										>
											*
										</Text>
										<Text style={styles.keyLiftsInfoText}>
											6
										</Text>
										<Text
											style={styles.keyLiftsInfoTextSmall}
										>
											reps
										</Text>
									</View>
								</View>
								<View style={styles.keyLiftsCard}>
									<View style={styles.keyLiftsCardTitle}>
										<Text
											style={styles.keyLiftsCardTitleText}
										>
											Squats
										</Text>
									</View>
									<View style={styles.keyLiftsInfo}>
										<Text style={styles.keyLiftsInfoText}>
											100
										</Text>
										<Text
											style={styles.keyLiftsInfoTextSmall}
										>
											kg
										</Text>
										<Text
											style={
												styles.keyLiftsInfoTextMiddle
											}
										>
											*
										</Text>
										<Text style={styles.keyLiftsInfoText}>
											5
										</Text>
										<Text
											style={styles.keyLiftsInfoTextSmall}
										>
											reps
										</Text>
									</View>
								</View>
							</ScrollView>
						</View>
					</View>
				) : (
					<View>
						<View style={styles.inputArea}>
							<Icon
								style={styles.searchIcon}
								name="magnify"
								size={20}
								color="#5063EE"
							/>
							<TextInput
								onChangeText={() => {}}
								placeholder="Search exercise"
								placeholderTextColor="#9595A7"
								autoCorrect={false}
								underlineColorAndroid="transparent"
							/>
						</View>
						<View style={styles.exescise}>
							<View style={styles.exesciseHeader}>
								<Image
									style={styles.image}
									source={require("../../assets/Stats/StatsSpecific/bench-press.png")}
								/>
								<Text style={styles.titleEx}>Bench Press</Text>
								<View style={styles.buttonView}>
									<TouchableOpacity
										style={styles.button}
										onPress={
											this._handleExerciseStatsDetails
										}
									>
										<Icon
											name="chevron-right"
											size={24}
											color="#5063EE"
										/>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.exesciseFooter}>
								<View style={styles.exesciseInfoTimes}>
									<Icon
										style={styles.iconFooter}
										name="checkbox-marked-circle-outline"
										size={24}
										color="#5063EE"
									/>
									<Text style={styles.number}>41</Text>
									<Text style={styles.text}>times</Text>
								</View>
								<View style={styles.exesciseInfoResults}>
									<Icon
										style={styles.iconFooter}
										name="dumbbell"
										size={24}
										color="#5063EE"
									/>
									<Text style={styles.number}>130</Text>
									<Text style={styles.text}>kg</Text>
								</View>
							</View>
						</View>
						<View style={styles.exescise}>
							<View style={styles.exesciseHeader}>
								<Image
									style={styles.image}
									source={require("../../assets/Stats/StatsSpecific/bench-press.png")}
								/>
								<Text style={styles.title}>Bench Press</Text>
								<View style={styles.buttonView}>
									<TouchableOpacity
										style={styles.button}
										onPress={() => {}}
									>
										<Icon
											name="chevron-right"
											size={24}
											color="#5063EE"
										/>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.exesciseFooter}>
								<View style={styles.exesciseInfoTimes}>
									<Icon
										style={styles.iconFooter}
										name="checkbox-marked-circle-outline"
										size={24}
										color="#5063EE"
									/>
									<Text style={styles.number}>41</Text>
									<Text style={styles.text}>times</Text>
								</View>
								<View style={styles.exesciseInfoResults}>
									<Icon
										style={styles.iconFooter}
										name="dumbbell"
										size={24}
										color="#5063EE"
									/>
									<Text style={styles.number}>130</Text>
									<Text style={styles.text}>kg</Text>
								</View>
							</View>
						</View>
						<View style={styles.exescise}>
							<View style={styles.exesciseHeader}>
								<Image
									style={styles.image}
									source={require("../../assets/Stats/StatsSpecific/bench-press.png")}
								/>
								<Text style={styles.title}>Bench Press</Text>
								<View style={styles.buttonView}>
									<TouchableOpacity
										style={styles.button}
										onPress={() => {}}
									>
										<Icon
											name="chevron-right"
											size={24}
											color="#5063EE"
										/>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.exesciseFooter}>
								<View style={styles.exesciseInfoTimes}>
									<Icon
										style={styles.iconFooter}
										name="checkbox-marked-circle-outline"
										size={24}
										color="#5063EE"
									/>
									<Text style={styles.number}>41</Text>
									<Text style={styles.text}>times</Text>
								</View>
								<View style={styles.exesciseInfoResults}>
									<Icon
										style={styles.iconFooter}
										name="dumbbell"
										size={24}
										color="#5063EE"
									/>
									<Text style={styles.number}>130</Text>
									<Text style={styles.text}>kg</Text>
								</View>
							</View>
						</View>
						<View style={styles.exescise}>
							<View style={styles.exesciseHeader}>
								<Image
									style={styles.image}
									source={require("../../assets/Stats/StatsSpecific/bench-press.png")}
								/>
								<Text style={styles.title}>Bench Press</Text>
								<View style={styles.buttonView}>
									<TouchableOpacity
										style={styles.button}
										onPress={() => {}}
									>
										<Icon
											name="chevron-right"
											size={24}
											color="#5063EE"
										/>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.exesciseFooter}>
								<View style={styles.exesciseInfoTimes}>
									<Icon
										style={styles.iconFooter}
										name="checkbox-marked-circle-outline"
										size={24}
										color="#5063EE"
									/>
									<Text style={styles.number}>41</Text>
									<Text style={styles.text}>times</Text>
								</View>
								<View style={styles.exesciseInfoResults}>
									<Icon
										style={styles.iconFooter}
										name="dumbbell"
										size={24}
										color="#5063EE"
									/>
									<Text style={styles.number}>130</Text>
									<Text style={styles.text}>kg</Text>
								</View>
							</View>
						</View>
						<View style={styles.exescise}>
							<View style={styles.exesciseHeader}>
								<Image
									style={styles.image}
									source={require("../../assets/Stats/StatsSpecific/bench-press.png")}
								/>
								<Text style={styles.title}>Bench Press</Text>
								<View style={styles.buttonView}>
									<TouchableOpacity
										style={styles.button}
										onPress={() => {}}
									>
										<Icon
											name="chevron-right"
											size={24}
											color="#5063EE"
										/>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.exesciseFooter}>
								<View style={styles.exesciseInfoTimes}>
									<Icon
										style={styles.iconFooter}
										name="checkbox-marked-circle-outline"
										size={24}
										color="#5063EE"
									/>
									<Text style={styles.number}>41</Text>
									<Text style={styles.text}>times</Text>
								</View>
								<View style={styles.exesciseInfoResults}>
									<Icon
										style={styles.iconFooter}
										name="dumbbell"
										size={24}
										color="#5063EE"
									/>
									<Text style={styles.number}>130</Text>
									<Text style={styles.text}>kg</Text>
								</View>
							</View>
						</View>
					</View>
				)}
			</ScrollView>
		);
	}
}
