import React, { Component } from "react";

import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";

export default class ExerciseDetails extends Component {
	render() {
		return (
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.container}
			>
				<View style={styles.title}>
					<Text style={styles.titleText}>Bench Press</Text>
				</View>
				<ScrollView showsHorizontalScrollIndicator={false}>
					<View style={styles.slide}>
						<Image
							source={require("../../assets/Exercises/BenchPress/bench-press-details.png")}
						/>
					</View>
				</ScrollView>
				<View style={styles.info}>
					<Text style={styles.label}>Muscles involved</Text>
					<View style={styles.tags}>
						<Text style={styles.tagsActive}>Chest</Text>
						<Text style={styles.tagsInactive}>Triceps</Text>
						<Text style={styles.tagsInactive}>Deltoids</Text>
					</View>
				</View>
				<View style={styles.description}>
					<Text style={styles.label}>About</Text>
					<Text style={styles.text}>
						Lorem Ipsum é simplesmente uma simulação de texto da
						indústria tipográfica e de impressos, e vem sendo
						utilizado desde o século XVI, quando um impressor
						desconhecido pegou uma bandeja de tipos e os embaralhou
						para fazer um livro de modelos de tipos. Lorem Ipsum
						sobreviveu não só a cinco séculos, como também ao salto
						para a editoração eletrônica, permanecendo
						essencialmente inalterado. Se popularizou na década de
						60, quando a Letraset lançou decalques contendo
						passagens de Lorem Ipsum, e mais recentemente quando
						passou a ser integrado a softwares de editoração
						eletrônica como Aldus PageMaker.
					</Text>
				</View>
			</ScrollView>
		);
	}
}
