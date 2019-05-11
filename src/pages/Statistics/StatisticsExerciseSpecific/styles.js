import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		padding: 0,
		margin: 0,
	},

	inputArea: {
		flexDirection: "row",
		height: 40,
		borderColor: "#DFDFE6",
		borderWidth: 1,
		margin: 5,
	},

	searchIcon: {
		padding: 10,
		opacity: 0.7,
	},

	buttonView: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
	},

	button: {
		marginTop: 30,
		padding: 5,
	},

	exescise: {
		margin: 5,
		backgroundColor: "#FFFFFF",
		borderWidth: 1,
		borderColor: "#DFDFE6",
		borderRadius: 2,
	},

	image: {
		padding: 5,
		marginLeft: 20,
		marginTop: 16,
		width: 53,
		height: 53,
	},

	title: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 18,
		color: "#23253A",
		marginTop: 32,
		marginLeft: 16,
		marginBottom: 15,
	},

	exesciseHeader: {
		flexDirection: "row",
		alignItems: "flex-start",
	},

	exesciseFooter: {
		flexDirection: "row",
		justifyContent: "flex-start",
	},

	exesciseInfoTimes: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginLeft: 20,
		padding: 10,
	},

	exesciseInfoResults: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginLeft: 20,
		padding: 10,
	},

	iconFooter: {
		width: 22,
		height: 22,
		marginTop: 10,
	},

	number: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 29,
		color: "#484856",
		paddingLeft: 5,
	},

	text: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		color: "#484856",
		paddingTop: 16,
		paddingLeft: 2,
	},
});

export default styles;
