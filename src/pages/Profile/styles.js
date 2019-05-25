import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	header: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#272B4B",
		height: 300,
	},

	title: {
		// flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
	},

	name: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 30,
		lineHeight: 41,
		letterSpacing: 0.41,
		color: "#fff",
		marginTop: 10,
		paddingVertical: 10,
	},

	currentPlan: {
		marginVertical: 10,
		paddingHorizontal: 50,
		flexWrap: "wrap",
	},

	label: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 12,
		lineHeight: 13,
		color: "#FEFEFE",
		opacity: 0.5,
	},

	titlePlan: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 18,
		lineHeight: 22,
		color: "#fff",
		paddingVertical: 10,
	},

	progress: {
		marginVertical: 5,
	},

	progressText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 12,
		lineHeight: 13,
		color: "#FEFEFE",
		opacity: 0.5,
	},

	basicStats: {
		flex: 1,
		flexDirection: "row",
		marginTop: 2,
	},

	completed: {
		flex: 1,
		justifyContent: "center",
		padding: 10,
		height: 100,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderRightWidth: 1,
		borderLeftWidth: 0,
	},

	completedWorkoutNumber: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 29,
		color: "#484856",
		textAlign: "left",
	},

	completedWorkoutText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		lineHeight: 16,
		color: "#26262B",
		textAlign: "left",
	},

	tonnage: {
		flex: 1,
		justifyContent: "center",
		padding: 10,
		height: 100,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderRightWidth: 0,
		borderLeftWidth: 0,
	},

	tonnageLiftedNumber: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 29,
		color: "#484856",
		textAlign: "left",
	},

	tonnageLiftedUnits: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		color: "#26262B",
	},

	tonnageLiftedText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		lineHeight: 16,
		color: "#26262B",
		textAlign: "left",
	},

	currentWeight: {
		flex: 1,
		justifyContent: "center",
		padding: 10,
		height: 100,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderRightWidth: 0,
		borderLeftWidth: 1,
	},

	currentWeightNumber: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 29,
		color: "#484856",
		textAlign: "left",
	},

	currentWeightUnits: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		color: "#26262B",
	},

	currentWeightText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		lineHeight: 16,
		color: "#26262B",
		textAlign: "left",
	},

	list: {
		marginVertical: 10,
	},

	listItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "#f5f5f5",
	},

	listItemText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		color: "#26262B",
	},

	icon: {
		padding: 2,
		color: "#5063EE",
	},
});

export default styles;
