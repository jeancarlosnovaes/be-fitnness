import {
	createSwitchNavigator,
	createAppContainer,
	createStackNavigator,
} from "react-navigation";

import Login from "./pages/Login";
import Intro from "./pages/Intro";
import Altura from "./pages/Intro/Altura";
import Idade from "./pages/Intro/Idade";
import Peso from "./pages/Intro/Peso";
import Sexo from "./pages/Intro/Sexo";
import UnidadeMedida from "./pages/Intro/UnidadeMedida";
import Dashboard from "./pages/Dashboard";

const Routes = createAppContainer(
	createSwitchNavigator({
		Intro,
		Sexo,
		Idade,
		Login,
		Altura,
		Peso,
		UnidadeMedida,
		Dashboard,
		// App: createStackNavigator({}),
	}),
);

export default Routes;
