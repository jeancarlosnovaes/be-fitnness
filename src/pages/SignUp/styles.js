import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	linearGradient: {
		flex: 1,
	},

	container: {
		flex: 1,
	},

	viewText: {
		marginLeft: 20,
		marginBottom: 10,
	},

	text: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 30,
		letterSpacing: 0.41,
		color: "#FFFFFF",
	},

	form: {
		marginLeft: 20,
		marginBottom: 20,
		marginRight: 20,
	},

	input: {
		opacity: 0.1,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		padding: 5,
		paddingBottom: 20,
		paddingTop: 20,
		color: "#fff",
		borderTopColor: "#E9EAF2",
		borderBottomColor: "#E9EAF2",
	},

	term: {
		marginLeft: 20,
	},

	termText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		lineHeight: 16,
		color: "#fff",
	},

	button: {
		alignSelf: "flex-end",
		marginRight: 20,
		marginTop: 10,
	},

	buttonSignUp: {
		backgroundColor: "#23253A",
		paddingLeft: 60,
		paddingRight: 60,
		paddingTop: 20,
		paddingBottom: 20,
	},

	buttonText: {
		color: "#fff",
		textTransform: "uppercase",
	},
});

export default styles;
