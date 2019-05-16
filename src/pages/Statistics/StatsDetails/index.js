import React, { Component } from "react";

import {
	ScrollView,
	View,
	Text,
	StatusBar,
	TouchableWithoutFeedback,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";

export default class StasDetails extends Component {
	state = {
		showTabs: 0,
	};

	static navigationOptions = () => {
		return {
			headerStyle: {
				backgroundColor: "#2c325f",
				elevation: 0,
			},
			headerTintColor: "#5063EE",
		};
	};

	_handleTabPressed = () => {
		const { showTabs } = this.state;
		if (showTabs === 0 || showTabs === 1) {
			this.setState({ showTabs: 2 });
		} else if (showTabs === 1 || showTabs === 2) {
			this.setState({ showTabs: 0 });
		} else {
			this.setState({ showTabs: 1 });
		}
	};

	render() {
		return (
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.container}
			>
				<StatusBar backgroundColor="#2c325f" barStyle="light-content" />

				<View style={styles.title}>
					<Text style={styles.titleText}>Bench Press</Text>
					<Text style={styles.text}>Total</Text>
					<View style={styles.totalWeight}>
						<Icon
							style={styles.icon}
							name="dumbbell"
							size={24}
							color="#5063EE"
						/>
						<Text style={styles.number}>224560</Text>
						<Text style={styles.metric}>kg</Text>
					</View>
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
							Overall
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
							Monthly
						</Text>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback
						activeOpacity={1}
						style={styles.buttonTab}
						onPress={this._handleTabPressed}
					>
						<Text
							style={
								this.state.showTabs === 2
									? styles.textTabsActive
									: styles.textTabsInactive
							}
						>
							Weekly
						</Text>
					</TouchableWithoutFeedback>
				</View>

				{this.state.showTabs === 0 ? (
					<View>
						<View style={styles.chart} />
						<View style={styles.label}>
							<Text style={styles.labelText}>By Month</Text>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									January
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									January
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									January
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									January
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									January
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									January
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									January
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									January
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
					</View>
				) : null}
				{this.state.showTabs === 1 ? (
					<View>
						<View style={styles.chart} />
						<View style={styles.label}>
							<Text style={styles.labelText}>By Weekly</Text>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									Weekly 1
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									Weekly 2
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									Weekly 3
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									Weekly 4
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
					</View>
				) : null}
				{this.state.showTabs === 2 ? (
					<View>
						<View style={styles.chart} />
						<View style={styles.label}>
							<Text style={styles.labelText}>By Day</Text>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>Sunday</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>Monday</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									Tuesday
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									Wednesday
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									Thursday
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>Friday</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
						<View style={styles.list}>
							<View style={styles.listTitle}>
								<Text style={styles.listTitleText}>
									Saturday
								</Text>
							</View>
							<View style={styles.listWeight}>
								<Text style={styles.listWeightText}>8560</Text>
								<Text style={styles.metricWeight}>kg</Text>
							</View>
						</View>
					</View>
				) : null}
			</ScrollView>
		);
	}
}
