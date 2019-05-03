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
				Home,
				Statistics,
				History,
				PlansLibrary,
			},
			{
				tabBarOptions: {
					initialRouteName: "Home",
					activeTintColor: "#23253A",
					inactiveTintColor: "#ff0",
					barStyle: { backgroundColor: "#fff" },
					tabStyle: { paddingBottom: 16 },
					showLabel: false,
					showIcon: true,
				},
			},
		),
	}),
);

export default Routes;
