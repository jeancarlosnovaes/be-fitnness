import React, { Component } from "react";
import {
	View,
	ScrollView,
	Text,
	Dimensions,
	TouchableWithoutFeedback,
} from "react-native";

import GLobalStats from "./GLobalStats";
import StatisticsExerciseSpecific from "../Statistics/StatisticsExerciseSpecific";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";

export default class Statistics extends Component {
	state = {
		showTabs: 0,
	};

	_handleShowStatsDetails = () => {
		this.props.navigation.navigate("StatsDetails");
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
					<GLobalStats />
				) : (
					<StatisticsExerciseSpecific />
				)}
			</ScrollView>
		);
	}
}
