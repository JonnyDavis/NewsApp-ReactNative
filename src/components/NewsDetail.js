import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { WebBrowser } from 'expo';

const NewsDetail = ({ news }) => {

	const published = moment(news.publishedAt, 'YYYY-MM-DD-hh-mm-ss').format('llll')
// "2017-12-10T05:05:11Z"
	const imageSource = {
		uri: news.urlToImage
	}


	  onLinkSelected = async () => {
    let result = await WebBrowser.openBrowserAsync(news.url);
    	return result;
  };


	return (
			<View style={styles.container}>
				<ScrollView contentContainerStyle={ styles.scrollContainer }>
					<Image style={styles.image} source={imageSource} />
					<Text style={styles.title}>{news.title}</Text>
					<Text style={styles.article}>{news.description}</Text>
					<View style={styles.footer}>
						<Text>Published at: {published}</Text>
						<Text style={styles.authorText}>Author: {news.author}</Text>
						<TouchableOpacity onPress={ onLinkSelected }>
							<Text style={styles.linkText}>{news.url}</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>

		)


}


export default NewsDetail;


const styles = StyleSheet.create({
	container: {
		flex: 1,

	},
	scrollContainer: {
		padding: 12,
	},
	imageContainer: {
		flex: 1,
	},
	image: {
		aspectRatio: 1.75,
		width: '100%',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingTop: 15,
		textAlign: 'center',
		// paddingBottom: 7,
	},
	article: {
		fontSize: 15,
		marginTop: 15,
		paddingTop: 15,
		borderTopColor: 'black',
		borderTopWidth: 1,
		textAlign: 'center',
	},
	footer: {
		marginTop: 15,
		paddingTop: 15,
		borderTopColor: 'black',
		borderTopWidth: 1,
		flex: 1,
		alignItems: 'center',
	},
	authorText: {
		paddingVertical: 5,
	},
	linkText: {
		textAlign: 'center',
		color: '#377AD1'
	}


})