import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	title: {
		flexDirection: "row",
		padding: 10,
		marginTop: 5,
	},

	titleText: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 30,
		color: "#26262B",
	},

	myWorkouts: {
		flex: 1,
	},

	myWorkoutsCard: {
		maxHeight: 400,
		borderRadius: 2,
		borderWidth: 0,
		marginTop: 2,
		marginBottom: 10,
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: "#23253A",
	},

	myWorkoutsCardTitle: {
		padding: 10,
	},

	myWorkoutsCardTitleText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 24,
		color: "#FFFFFF",
	},

	myWorkoutsCardDate: {
		fontStyle: "normal",
		fontWeight: "300",
		fontSize: 14,
		color: "#fff",
		opacity: 0.7,
	},

	myWorkoutsCardChart: {
		// flexDirection: "row",
		// height: 200,
		// paddingVertical: 16,
	},

	myWorkoutsCardFotter: {
		flexDirection: "row",
	},

	myWorkoutsCardInfo: {
		margin: 10,
	},

	myWorkoutsCardFotterInfoNumber: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 28,
		textAlign: "center",
		color: "#FFFFFF",
	},

	myWorkoutsCardFotterInfoText: {
		fontStyle: "normal",
		fontWeight: "300",
		fontSize: 14,
		textAlign: "center",
		color: "#FFFFFF",
		opacity: 0.7,
	},

	myWorkoutsInfoText: {
		fontStyle: "normal",
		fontWeight: "300",
		fontSize: 14,
		textAlign: "center",
		color: "#26262B",
		margin: 10,
		padding: 5,
	},

	myWorkoutsCardButton: {
		flex: 1,
		alignSelf: "flex-end",
		margin: 10,
	},

	myWorkoutsCardButtonRight: {
		margin: 10,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 40,
		paddingRight: 40,
		backgroundColor: "#5063EE",
	},

	myWorkoutsCardButtonRightText: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 15,
		textAlign: "center",
		letterSpacing: 2,
		color: "#fff",
		textTransform: "uppercase",
	},
});

export default styles;
