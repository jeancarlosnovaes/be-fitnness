import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2c325f",
		margin: 0,
		padding: 0,
	},

	title: {
		margin: 10,
	},

	text: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		lineHeight: 16,
		color: "#fff",
	},

	titleText: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 30,
		lineHeight: 41,
		color: "#fff",
	},

	tabs: {
		flexDirection: "row",
		marginHorizontal: 10,
		borderBottomColor: "#979797",
		borderBottomWidth: 1,
	},

	textTabsActive: {
		marginRight: 20,
		paddingVertical: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		color: "#fff",
		borderBottomColor: "#5063EE",
		borderBottomWidth: 3,
	},

	textTabsInactive: {
		marginRight: 20,
		paddingVertical: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		color: "#fff",
		opacity: 0.7,
	},

	totalWeight: {
		flexDirection: "row",
		justifyContent: "flex-start",
	},

	icon: {
		marginTop: 10,
	},

	number: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 34,
		color: "#fff",
		paddingLeft: 5,
		paddingRight: 5,
	},

	metric: {
		fontStyle: "normal",
		fontWeight: "300",
		fontSize: 14,
		color: "#fff",
		opacity: 0.7,
		marginTop: 20,
	},

	metricWeight: {
		fontStyle: "normal",
		fontWeight: "300",
		fontSize: 14,
		color: "#fff",
		opacity: 0.7,
		marginTop: 8,
		marginLeft: 2,
	},

	chart: {
		margin: 10,
		padding: 30,
	},

	label: {
		margin: 10,
	},

	labelText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		color: "#fff",
		letterSpacing: 1,
		opacity: 0.7,
		textTransform: "uppercase",
		paddingLeft: 12,
	},

	list: {
		flexDirection: "row",
		borderBottomColor: "#E1DFDF",
		borderBottomWidth: 1,
	},

	listTitle: {
		marginLeft: 10,
		// marginTop: 5,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},

	listTitleText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		color: "#fff",
	},

	listWeight: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignSelf: "flex-end",
		marginRight: 10,
		padding: 2,
	},

	listWeightText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 24,
		color: "#fff",
		padding: 0,
	},
});

export default styles;
