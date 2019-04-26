import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		marginBottom: 20,
		marginLeft: 5,
		alignSelf: "center",
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		color: "#26262b",
		marginBottom: 10,
	},
	description: {
		fontSize: 14,
		lineHeight: 20,
		textAlign: "center",
		marginLeft: 10,
		marginRight: 10,
		color: "#26262b",
		marginBottom: 30,
	},

	button: {
		paddingRight: 50,
		paddingLeft: 50,
		paddingTop: 20,
		paddingBottom: 20,
		marginBottom: 30,
		backgroundColor: "#23253A",
	},

	button2: {
		marginTop: 10,
	},

	buttonText2: {
		fontWeight: "500",
		fontSize: 15,
		textAlign: "center",
		letterSpacing: 2,
		textTransform: "uppercase",
		color: "#26262B",
	},

	buttonText: {
		fontWeight: "500",
		fontSize: 15,
		textAlign: "center",
		letterSpacing: 2,
		textTransform: "uppercase",
		color: "#fff",
	},
});

export default styles;
