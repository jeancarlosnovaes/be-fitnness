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
	weight: {
		flex: 1,
		// position: "absolute",
		top: "10%",
		marginLeft: 20,
		marginRight: 20,
		maxHeight: "30%",
	},

	weightTitle: {
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

	weightDescription: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 14,
		lineHeight: 20,
		textAlign: "center",
		color: "#26262B",
	},

	weightView: {
		flex: 1,
	},

	weightInfo: {
		flexDirection: "row",
	},

	weightBigText: {
		fontStyle: "normal",
		fontWeight: "300",
		fontSize: 34,
	},

	weightSmallText: {
		top: 20,
		left: 10,
		height: 20,
		fontStyle: "normal",
		fontWeight: "300",
		fontSize: 14,
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
	mainContainerStyle: {},
	thumbStyle: {
		borderColor: "#5063EE",
	},
	itemStyle: {
		borderRightWidth: 1,
		borderColor: "#DFDFE5",
	},
});

export default styles;
