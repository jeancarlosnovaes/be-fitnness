import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		color: "#000",
		borderBottomColor: "#5063EE",
		borderBottomWidth: 3,
	},

	textTabsInactive: {
		marginRight: 20,
		paddingVertical: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		color: "#26262B",
		opacity: 0.4,
	},

	title: {
		flexDirection: "row",
		padding: 10,
		marginTop: 30,
	},

	titleText: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 30,
		lineHeight: 41,
		color: "#000",
	},

	workoutTitle: {
		flexDirection: "row",
		marginLeft: 10,
	},

	workoutTitleText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 24,
		color: "#fff",
		paddingLeft: 10,
	},

	workoutUnits: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		color: "#fff",
		opacity: 0.7,
		paddingLeft: 10,
		paddingTop: 10,
	},

	icon: {
		color: "#5063EE",
	},

	statsChart: {
		flex: 1,
		marginTop: 20,
	},

	statsChartCard: {
		maxHeight: 400,
		borderRadius: 2,
		borderWidth: 0,
		marginTop: 2,
		marginBottom: 10,
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: "#23253A",
	},

	statsChartCardTitle: {
		padding: 10,
	},

	statsChartCardTitleText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 24,
		color: "#fff",
		opacity: 0.7,
	},

	statsChartCardChart: {
		flexDirection: "row",
		height: 200,
		paddingVertical: 16,
	},

	statsGlobal: {
		marginTop: 2,
	},

	stats: {
		flex: 1,
		flexDirection: "row",
	},

	statsIcon: {
		paddingTop: 20,
		paddingRight: 8,
	},

	statsInfo: {
		justifyContent: "center",
		marginRight: 2,
	},

	statsCompleted: {
		flex: 1,
		flexDirection: "row",
		padding: 5,
		height: 94,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 0,
		borderRightWidth: 1,
		borderLeftWidth: 0,
	},

	statsNumber: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 29,
		color: "#484856",
		textAlign: "left",
	},

	statsText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		lineHeight: 16,
		color: "#26262B",
		textAlign: "left",
	},

	statsTonnage: {
		flex: 1,
		flexDirection: "row",
		padding: 5,
		height: 94,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 0,
		borderRightWidth: 0,
		borderLeftWidth: 0,
	},

	statsUnits: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		color: "#26262B",
	},

	statsAvgWorkoutDuration: {
		flex: 1,
		flexDirection: "row",
		padding: 5,
		height: 94,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 0,
		borderRightWidth: 1,
		borderLeftWidth: 0,
	},

	statsAvgRestTime: {
		flex: 1,
		flexDirection: "row",
		padding: 5,
		height: 94,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 0,
		borderRightWidth: 0,
		borderLeftWidth: 0,
	},

	statsDistanceDone: {
		flex: 1,
		flexDirection: "row",
		padding: 5,
		height: 94,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 0,
		borderRightWidth: 0,
		borderLeftWidth: 0,
	},

	statsLiftingTimeSpent: {
		flex: 1,
		flexDirection: "row",
		padding: 5,
		height: 94,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderRightWidth: 1,
		borderLeftWidth: 0,
	},

	statsRunningTimeSpent: {
		flex: 1,
		flexDirection: "row",
		padding: 5,
		height: 94,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderRightWidth: 0,
		borderLeftWidth: 0,
	},

	statsCurrentWeight: {
		flex: 1,
		flexDirection: "row",
		padding: 5,
		height: 94,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderRightWidth: 1,
		borderLeftWidth: 0,
	},

	keyLifts: {
		flex: 1,
	},

	keyLiftsLabels: {
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 5,
	},

	keyLiftsLabelText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		letterSpacing: 1,
		color: "#26262B",
		opacity: 0.7,
		textTransform: "uppercase",
	},

	keyLiftsCard: {
		maxHeight: 139,
		minHeight: 139,
		maxWidth: 277,
		width: 277,
		borderRadius: 2,
		borderWidth: 0,
		marginTop: 2,
		marginBottom: 10,
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: "#23253A",
	},

	keyLiftsCardTitle: {
		padding: 10,
	},

	keyLiftsCardTitleText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		color: "#FFFFFF",
	},

	keyLiftsInfo: {
		flexDirection: "row",
		padding: 10,
	},

	keyLiftsInfoText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 50,
		color: "#FFFFFF",
	},

	keyLiftsInfoTextMiddle: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 50,
		color: "#FFFFFF",
		paddingRight: 20,
	},

	keyLiftsInfoTextSmall: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 12,
		color: "#FEFEFE",
		paddingTop: 40,
		paddingRight: 20,
		paddingLeft: 5,
	},
});

export default styles;
