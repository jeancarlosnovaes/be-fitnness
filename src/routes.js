import React from "react";
import { View, Text, Platform } from "react-native";
import {
	createSwitchNavigator,
	createAppContainer,
	createStackNavigator,
	createBottomTabNavigator,
	createMaterialTopTabNavigator,
} from "react-navigation";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Intro from "./pages/Intro";
import Altura from "./pages/Intro/Altura";
import Idade from "./pages/Intro/Idade";
import Peso from "./pages/Intro/Peso";
import Sexo from "./pages/Intro/Sexo";
import UnidadeMedida from "./pages/Intro/UnidadeMedida";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import StatisticsExerciseSpecific from "./pages/Statistics/StatisticsExerciseSpecific";
import History from "./pages/History";
import PlansLibrary from "./pages/PlansLibrary";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TabsTopStats = createMaterialTopTabNavigator(
	{
		Global: {
			screen: Statistics,
			navigationOptions: {
				title: "Global stats",
			},
		},
		Specific: {
			screen: StatisticsExerciseSpecific,
			navigationOptions: {
				title: "Exercise specific",
			},
		},
	},
	{
		navigationOptions: {
			headerTitle: "Statistics",
			headerTitleStyle: {
				fontStyle: "normal",
				fontWeight: "500",
				fontSize: 30,
				color: "#000",
				marginLeft: 10,
			},
			headerStyle: {
				elevation: 0,
				// marginTop: 30,
			},
		},

		tabBarOptions: {
			initialRouteName: "Statistics",
			activeTintColor: "#000",
			inactiveTintColor: "#979797",
			style: {
				backgroundColor: "#fff",
				borderBottomWidth: 0,
				elevation: 0,
			},
			tabStyle: {
				padding: 5,
				// elevation: 0,
			},
			labelStyle: {
				fontStyle: "normal",
				fontWeight: "normal",
				fontSize: 15,
				color: "#26262B",
				textTransform: "capitalize",
			},
			indicatorStyle: {
				borderBottomColor: "#5063EE",
				borderBottomWidth: 3,
				borderEndColor: "#fff",
			},
			showLabel: true,
		},
	},
);

const StackTabsTop = createStackNavigator({ TabsTopStats });

const MainBottomTabs = createBottomTabNavigator(
	{
		Ínicio: { screen: Home },
		Statistics: {
			screen: StackTabsTop,
			navigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ tintColor }) => (
					<Icon name="chart-bar" size={20} color={tintColor} />
				),
			}),
		},
		History: { screen: History },
		Plans: { screen: PlansLibrary },
	},
	{
		tabBarOptions: {
			initialRouteName: "Home",
			activeTintColor: "#000",
			inactiveTintColor: "#979797",
			barStyle: { backgroundColor: "#fff", fontSize: 14 },
			tabStyle: { padding: 5 },
			showLabel: true,
			showIcon: true,
		},
	},
);

const SwitchNavigator = createSwitchNavigator({
	Intro,
	Sexo,
	Idade,
	UnidadeMedida,
	Peso,
	Altura,
	Login,
	SignUp,
	Home: MainBottomTabs,
});

const Routes = createAppContainer(SwitchNavigator);

export default Routes;
