import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
	count: {
		position: "absolute",
		height: 13,
		top: "5%",
		bottom: "5%",
		// backgroundColor: "#000",
	},
	countText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 12,
		color: "#23253A",
		opacity: 0.5,
	},
	gender: {
		flex: 1,
		// position: "absolute",
		top: "10%",
		marginLeft: 20,
		marginRight: 20,
	},

	genderTitle: {
		top: 0,
		marginTop: 0,
		paddingTop: 0,
		marginBottom: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 24,
		textAlign: "center",
		color: "#26262B",
	},

	genderDescription: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 14,
		lineHeight: 20,
		textAlign: "center",
		color: "#26262B",
	},

	genderView: {
		flex: 1,
		flexDirection: "row",
	},

	genderIconTouch: {
		height: 105,
		borderRadius: 55,
		borderWidth: 2,
		borderColor: "#888",
		paddingLeft: 40,
		paddingRight: 40,
		paddingTop: 22,
		paddingBottom: 5,
		margin: 10,
		backgroundColor: "#fff",
	},

	genderIconTouchPressed: {
		height: 105,
		borderRadius: 55,
		borderWidth: 2,
		borderColor: "#888",
		paddingLeft: 40,
		paddingRight: 40,
		paddingTop: 22,
		paddingBottom: 5,
		margin: 10,
		backgroundColor: "#7081FF",
	},
	button: {
		flexDirection: "row",
		borderTopColor: "#DFDFE6",
		borderTopWidth: 1,
		width: "100%",
		alignItems: "center",
	},

	buttonBack: {
		paddingBottom: 20,
		paddingTop: 5,
		paddingRight: 10,
		paddingLeft: 10,
		margin: 5,
		borderRightColor: "#DFDFE6",
		borderRightWidth: 1,
		opacity: 0.5,
	},
	buttonNext: {
		width: "75%",
	},
	buttonNextText: {
		textAlign: "center",
		textTransform: "uppercase",
		color: "#5063EE",
		fontWeight: "500",
		fontSize: 15,
		letterSpacing: 2,
	},
});

export default styles;
