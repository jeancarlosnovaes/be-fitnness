import React, { Component } from "react";

import { ScrollView, View, Text, StatusBar } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";

export default class StasDetails extends Component {
	static navigationOptions = () => {
		return {
			headerStyle: {
				backgroundColor: "#2c325f",
				elevation: 0,
			},
			headerTintColor: "#5063EE",
		};
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

				<View style={styles.chart} />
				<View style={styles.label}>
					<Text style={styles.labelText}>By Month</Text>
				</View>
				<View style={styles.list}>
					<View style={styles.listTitle}>
						<Text style={styles.listTitleText}>January</Text>
					</View>
					<View style={styles.listWeight}>
						<Text style={styles.listWeightText}>8560</Text>
						<Text style={styles.metricWeight}>kg</Text>
					</View>
				</View>
				<View style={styles.list}>
					<View style={styles.listTitle}>
						<Text style={styles.listTitleText}>January</Text>
					</View>
					<View style={styles.listWeight}>
						<Text style={styles.listWeightText}>8560</Text>
						<Text style={styles.metricWeight}>kg</Text>
					</View>
				</View>
				<View style={styles.list}>
					<View style={styles.listTitle}>
						<Text style={styles.listTitleText}>January</Text>
					</View>
					<View style={styles.listWeight}>
						<Text style={styles.listWeightText}>8560</Text>
						<Text style={styles.metricWeight}>kg</Text>
					</View>
				</View>
				<View style={styles.list}>
					<View style={styles.listTitle}>
						<Text style={styles.listTitleText}>January</Text>
					</View>
					<View style={styles.listWeight}>
						<Text style={styles.listWeightText}>8560</Text>
						<Text style={styles.metricWeight}>kg</Text>
					</View>
				</View>
				<View style={styles.list}>
					<View style={styles.listTitle}>
						<Text style={styles.listTitleText}>January</Text>
					</View>
					<View style={styles.listWeight}>
						<Text style={styles.listWeightText}>8560</Text>
						<Text style={styles.metricWeight}>kg</Text>
					</View>
				</View>
				<View style={styles.list}>
					<View style={styles.listTitle}>
						<Text style={styles.listTitleText}>January</Text>
					</View>
					<View style={styles.listWeight}>
						<Text style={styles.listWeightText}>8560</Text>
						<Text style={styles.metricWeight}>kg</Text>
					</View>
				</View>
				<View style={styles.list}>
					<View style={styles.listTitle}>
						<Text style={styles.listTitleText}>January</Text>
					</View>
					<View style={styles.listWeight}>
						<Text style={styles.listWeightText}>8560</Text>
						<Text style={styles.metricWeight}>kg</Text>
					</View>
				</View>
				<View style={styles.list}>
					<View style={styles.listTitle}>
						<Text style={styles.listTitleText}>January</Text>
					</View>
					<View style={styles.listWeight}>
						<Text style={styles.listWeightText}>8560</Text>
						<Text style={styles.metricWeight}>kg</Text>
					</View>
				</View>
			</ScrollView>
		);
	}
}
