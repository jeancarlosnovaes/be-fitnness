import React, { Component } from "react";
import {
	View,
	ScrollView,
	Text,
	TouchableOpacity,
	TextInput,
	Modal,
	Image,
	CheckBox,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";

const data = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 },
];

export default class Home extends Component {
	state = {
		modalVisible: false,
		checked: false,
	};

	_handleMyWorkouts = () => {
		this.props.navigation.navigate("MyWorkouts");
	};

	_handleProfile = () => {
		this.props.navigation.navigate("Profile");
	};

	_setModalVisible = () => {
		this.setState({ modalVisible: !this.state.modalVisible });
	};

	_createWorkout = () => {
		this.props.navigation.navigate("AddSets");
		this._setModalVisible();
	};

	_handleCheckBox = () => {
		this.setState({ checked: !this.state.checked });
	};

	_handleShowExercise = () => {
		this.props.navigation.navigate("ExerciseDetails");
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
							onPress={this._handleProfile}
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
						onPress={() => {
							this._setModalVisible();
						}}
						style={styles.buttonCreateWorkouts}
					>
						<Text style={styles.buttonCreateWorkoutsText}>
							Create Workouts
						</Text>
					</TouchableOpacity>
					<Modal
						animationType="slide"
						transparent={false}
						visible={this.state.modalVisible}
						onRequestClose={() => {
							Alert.alert("Modal has been closed.");
						}}
					>
						<View style={styles.container}>
							<View style={styles.header}>
								<View style={styles.buttomTop}>
									<TouchableOpacity
										onPress={() => {
											this._setModalVisible();
										}}
									>
										<Icon
											name="close"
											size={24}
											color="#5063EE"
										/>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={() => {
											this._createWorkout();
										}}
									>
										<Text style={styles.text}>Next</Text>
									</TouchableOpacity>
								</View>
								<View style={styles.title}>
									<Text style={styles.titleText}>
										Add Exercises
									</Text>
									<Text style={styles.smallTextTitle}>
										Workout creation
									</Text>
								</View>
								<View style={styles.searchAndFilter}>
									<View style={styles.inputArea}>
										<Icon
											style={styles.searchIcon}
											name="magnify"
											size={20}
											color="#5063EE"
										/>
										<TextInput
											onChangeText={() => {}}
											placeholder="Search"
											placeholderTextColor="#9595A7"
											autoCorrect={false}
											underlineColorAndroid="transparent"
											style={styles.input}
										/>
									</View>

									<TouchableOpacity
										style={styles.buttomFilter}
										onPress={() => {}}
									>
										<Icon
											name="tune"
											size={24}
											color="#5063EE"
										/>
									</TouchableOpacity>
								</View>
							</View>

							<View style={styles.list}>
								<TouchableOpacity
									onPress={() => {
										this._handleShowExercise();
									}}
									style={styles.exercise}
								>
									<View style={styles.exerciseTitleAndGroup}>
										<Image
											source={require("../../assets/Exercises/BenchPress/bench-press.png")}
										/>
										<Text style={styles.exerciseTitle}>
											Bench Press
										</Text>
									</View>
									<CheckBox
										value={this.state.checked}
										disabled={false}
										onValueChange={() => {
											this._handleCheckBox();
										}}
										style={styles.checkbox}
									/>
								</TouchableOpacity>
								<View style={styles.exercise}>
									<View style={styles.exerciseTitleAndGroup}>
										<Image
											source={require("../../assets/Exercises/BenchPress/bench-press.png")}
										/>
										<Text style={styles.exerciseTitle}>
											Bench Press
										</Text>
									</View>
									<CheckBox
										value={this.state.checked}
										disabled={false}
										onValueChange={() => {
											this._handleCheckBox();
										}}
										style={styles.checkbox}
									/>
								</View>
								<View style={styles.exercise}>
									<View style={styles.exerciseTitleAndGroup}>
										<Image
											source={require("../../assets/Exercises/BenchPress/bench-press.png")}
										/>
										<Text style={styles.exerciseTitle}>
											Bench Press
										</Text>
									</View>
									<CheckBox
										value={this.state.checked}
										disabled={false}
										onValueChange={() => {
											this._handleCheckBox();
										}}
										style={styles.checkbox}
									/>
								</View>
								<View style={styles.exercise}>
									<View style={styles.exerciseTitleAndGroup}>
										<Image
											source={require("../../assets/Exercises/BenchPress/bench-press.png")}
										/>
										<Text style={styles.exerciseTitle}>
											Bench Press
										</Text>
									</View>
									<CheckBox
										value={this.state.checked}
										disabled={false}
										onValueChange={() => {
											this._handleCheckBox();
										}}
										style={styles.checkbox}
									/>
								</View>
								<View style={styles.exercise}>
									<View style={styles.exerciseTitleAndGroup}>
										<Image
											source={require("../../assets/Exercises/BenchPress/bench-press.png")}
										/>
										<Text style={styles.exerciseTitle}>
											Bench Press
										</Text>
									</View>
									<CheckBox
										value={this.state.checked}
										disabled={false}
										onValueChange={() => {
											this._handleCheckBox();
										}}
										style={styles.checkbox}
									/>
								</View>
							</View>
						</View>
					</Modal>
				</View>
			</ScrollView>
		);
	}
}
