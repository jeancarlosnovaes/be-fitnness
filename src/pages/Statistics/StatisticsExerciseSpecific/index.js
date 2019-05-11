import React, { Component } from "react";
import {
	View,
	ScrollView,
	Text,
	TextInput,
	Image,
	TouchableOpacity,

} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";

export default class StatisticsExerciseSpecific extends Component {
	render() {
		return (
			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}
			>
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
							source={require("../../../assets/Stats/StatsSpecific/bench-press.png")}
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
							source={require("../../../assets/Stats/StatsSpecific/bench-press.png")}
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
							source={require("../../../assets/Stats/StatsSpecific/bench-press.png")}
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
							source={require("../../../assets/Stats/StatsSpecific/bench-press.png")}
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
							source={require("../../../assets/Stats/StatsSpecific/bench-press.png")}
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
			</ScrollView>
		);
	}
}
