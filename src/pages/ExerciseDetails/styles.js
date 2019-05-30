import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		margin: 10,
		backgroundColor: "#fff",
	},

	title: {
		flexDirection: "row",
		justifyContent: "flex-start",
		paddingHorizontal: 10,
		paddingVertical: 20,
	},

	titleText: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 30,
		color: "#26262B",
	},

	slide: {
		flexDirection: "row",
		justifyContent: "center",
		paddingHorizontal: 20,
		paddingVertical: 20,
	},

	info: {
		borderTopWidth: 1,
		borderTopColor: "#E9EAF2",
		padding: 10,
	},

	tags: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 10,
	},

	tagsActive: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		lineHeight: 18,
		textAlign: "center",
		color: "#fff",
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: "#7081FF",
		borderRadius: 2,
	},

	tagsInactive: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		lineHeight: 18,
		textAlign: "center",
		color: "#fff",
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: "#7081FF",
		opacity: 0.5,
		borderRadius: 2,
	},

	description: {
		borderTopWidth: 1,
		borderTopColor: "#E9EAF2",
		padding: 10,
	},

	label: {
		fontStyle: "normal",
		fontWeight: "normal",
		lineHeight: 15,
		color: "#26262B",
		letterSpacing: 1,
		opacity: 0.7,
		textTransform: "uppercase",
		paddingBottom: 10,
	},

	text: {
		fontStyle: "normal",
		fontWeight: "normal",
		lineHeight: 21,
		color: "#26262B",
	},
});

export default styles;
