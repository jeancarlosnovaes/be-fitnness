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
import History from "./pages/History";
import PlansLibrary from "./pages/PlansLibrary";

const Routes = createAppContainer(
	createSwitchNavigator({
		Intro,
		Sexo,
		Idade,
		UnidadeMedida,
		Peso,
		Altura,
		Login,
		SignUp,
		Home: createBottomTabNavigator(
			{
				Ínicio: { screen: Home },
				Statistics: { screen: Statistics },
				History: { screen: History },
				Plans: { screen: PlansLibrary },
			},
			{
				tabBarOptions: {
					initialRouteName: "Home",
					activeTintColor: "#000",
					inactiveTintColor: "#979797",
					barStyle: { backgroundColor: "#fff" },
					tabStyle: { padding: 5 },
					showLabel: true,
					showIcon: true,
				},
			},
		),
	}),
);

export default Routes;
