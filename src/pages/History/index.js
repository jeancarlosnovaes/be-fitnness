import React, { Component } from "react";

import { View, Text, Alert } from "react-native";
import moment from "moment";

import CalendarStrip from "react-native-calendar-strip";

import styles from "./styles";

import br from "moment/locale/pt-br";
moment.defineLocale("pt-br", br);

let datesWhitelist = [
	{
		start: moment("2019-04-28", "YYYY/MM/DD"),
		end: moment(),
	},
];
let datesBlacklist = [moment().add(5, "days")]; // 1 day disabled

export default class History extends Component {
	state = {
		date: moment(new Date()).format("DD"),
	};

	_onDateSelected = date => {
		this.setState({ date });
	};

	render() {
		return (
			<View>
				<CalendarStrip
					calendarAnimation={{ type: "sequence", duration: 30 }}
					daySelectionAnimation={{
						type: "border",
						duration: 200,
						borderWidth: 1,
						borderHighlightColor: "#fff",
					}}
					style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
					calendarHeaderStyle={{ color: "#fff" }}
					calendarColor={"#7743CE"}
					dateNumberStyle={{ color: "#fff" }}
					dateNameStyle={{ color: "#fff" }}
					highlightDateNumberStyle={{ color: "yellow" }}
					highlightDateNameStyle={{ color: "yellow" }}
					disabledDateNameStyle={{ color: "grey" }}
					disabledDateNumberStyle={{ color: "grey" }}
					datesWhitelist={datesWhitelist}
					datesBlacklist={datesBlacklist}
					iconLeft={require("../../assets/History/left-arrow.png")}
					iconRight={require("../../assets/History/right-arrow.png")}
					iconContainer={{ flex: 0.1 }}
					onDateSelected={date => this._onDateSelected(date.date())}
				/>
				<View style={{ padding: 100, backgroundColor: "yellow" }}>
					<Text
						style={{
							justifyContent: "center",
							textAlign: "center",
							color: "#000",
							fontSize: 30,
						}}
					>
						{this.state.date}
					</Text>
				</View>
			</View>
		);
	}
}
