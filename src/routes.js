import React from "react";

import {
	createSwitchNavigator,
	createAppContainer,
	createStackNavigator,
	createBottomTabNavigator,
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
import StatsDetails from "./pages/Statistics/StatsDetails";
import ExerciseStatsDetails from "./pages/Statistics/ExerciseStatsDetails";
import History from "./pages/History";
import PlansLibrary from "./pages/PlansLibrary";
import MyWorkouts from "./pages/MyWorkouts";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeStack = createStackNavigator({
	Início: {
		screen: Home,
		navigationOptions: {
			header: null,
		},
	},
	MyWorkouts,
	// WorkoutsDetails,
	// ExerciseDetails,
	// PreviewsWorkouts,
	// Profile,
});

const StatsStack = createStackNavigator({
	Statistics: {
		screen: Statistics,
		navigationOptions: {
			header: null,
		},
	},
	StatsDetails,
	ExerciseStatsDetails,
});

const HistoryStack = createStackNavigator({
	History: {
		screen: History,
		navigationOptions: {
			header: null,
		},
	},
});

const PlansLibraryStack = createStackNavigator({
	PlansLibrary: {
		screen: PlansLibrary,
		navigationOptions: {
			header: null,
		},
	},
});

const MainTabs = createBottomTabNavigator({
	Home: {
		screen: HomeStack,
		navigationOptions: () => ({
			tabBarIcon: ({ tintColor }) => (
				<Icon name="home" size={20} color={tintColor} />
			),
		}),
	},
	Stats: {
		screen: StatsStack,
		navigationOptions: () => ({
			tabBarIcon: ({ tintColor }) => (
				<Icon name="chart-bar" size={20} color={tintColor} />
			),
		}),
	},
	History: {
		screen: HistoryStack,
		navigationOptions: () => ({
			tabBarIcon: ({ tintColor }) => (
				<Icon name="calendar" size={20} color={tintColor} />
			),
		}),
	},
	Plans: {
		screen: PlansLibraryStack,
		navigationOptions: () => ({
			tabBarIcon: ({ tintColor }) => (
				<Icon
					name="clipboard-text-outline"
					size={20}
					color={tintColor}
				/>
			),
		}),
	},
});

const AppNavigator = createSwitchNavigator({
	Intro,
	Sexo,
	Idade,
	Altura,
	Peso,
	UnidadeMedida,
	SignUp,
	Login,
	App: MainTabs,
});

const Routes = createAppContainer(AppNavigator);

export default Routes;
