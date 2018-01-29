import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NewsDetail from '../components/NewsDetail';
export default class NewsDetailScreen extends Component {

	static navigationOptions = ({ navigation }) => {
		const title = navigation.state.params.title;
		return {
			title: title
		}
	}

	render() {
		const news = this.props.navigation.state.params;
		return (
			<View style={styles.container}>
				<NewsDetail news={news} />
			</View>
		);
	}

}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})