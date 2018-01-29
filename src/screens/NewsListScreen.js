import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import NewsList from '../components/NewsList';
import news from '../data/articles.json';

// import { } from '../store/news'

class NewsListScreen extends React.Component {
	static navigationOptions = {
		title: 'BBC News'
	};

	constructor() {
		super();

		this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this);
	}


	navigateToDetailScreen(news) {
		this.props.navigation.navigate('Detail', news);
	}


	render() {
		return (
			<View style={styles.container}>
				<NewsList news={ news } onNewsSelected={ this.navigateToDetailScreen }/>
			</View>
		);
	}
}

export default NewsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

