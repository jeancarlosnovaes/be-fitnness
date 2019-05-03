import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	logo: {
		marginTop: 50,
		marginLeft: 53,
		marginBottom: 20,
	},
	welcome: {
		justifyContent: "center",
		alignItems: "center",
	},
	welcomeText: {
		fontStyle: "normal",
		fontWeight: "300",
		fontSize: 25,
		textAlign: "center",
		color: "#26262B",
	},
	welcomeSmallText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		lineHeight: 20,
		marginLeft: 55,
		color: "#26262B",
		marginBottom: 30,
		alignSelf: "flex-start",
	},
	login: {
		justifyContent: "flex-end",
		alignItems: "stretch",
		marginTop: 70,
		marginRight: 55,
		marginLeft: 55,
	},
	buttonSignUp: {
		backgroundColor: "#23253A",
		paddingLeft: 70,
		paddingRight: 70,
		paddingTop: 20,
		paddingBottom: 20,
		marginBottom: 5,
	},
	buttonSignUpText: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 15,
		textAlign: "center",
		letterSpacing: 2,
		textTransform: "uppercase",
		color: "#FFFFFF",
	},
	buttonSignUpFacebook: {
		borderColor: "#23253A",
		borderWidth: 1,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 20,
		paddingBottom: 20,
		marginBottom: 20,
	},
	buttonSignUpTextFacebook: {
		fontWeight: "500",
		fontSize: 15,
		textAlign: "center",
		letterSpacing: 2,
		textTransform: "uppercase",
		color: "#5063EE",
	},
	signIn: {
		justifyContent: "flex-end",
		alignItems: "flex-end",
		marginTop: 10,
		marginRight: 55,
	},
	signInText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		textAlign: "right",
		color: "#26262B",
	},
	buttonSignIn: {
		alignSelf: "flex-end",
		marginTop: 10,
	},
	buttonSignInText: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 15,
		lineHeight: 21,
		textAlign: "center",
		letterSpacing: 2,
		textTransform: "uppercase",
		color: "#5063EE",
	},
});

export default styles;
