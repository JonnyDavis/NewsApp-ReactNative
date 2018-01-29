import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Platform } from 'react-native';
import moment from 'moment';

const NewsListItem = ({ item, onNewsSelected }) => {

const publishedDate = moment(item.publishedAt, 'YYYY-MM-DD-hh-mm-ss').fromNow();

	return (
		<TouchableHighlight onPress={ onNewsSelected } underlayColor="#c0c0c0">
			<View style={styles.container}>
				<Text style={styles.titleText} numberOfLines={1}>
				{item.title}
				</Text>
				<Text numberOfLines={1}>
				{publishedDate}
				</Text>
			</View>
		</TouchableHighlight>
	)
}


export default NewsListItem;

const styles = StyleSheet.create({
	container: {
		padding: 8,
		flex: 1,
		flexDirection: 'column',

	},
	titleText: {
		fontSize: 15,
		fontWeight: 'bold',
	},
})
