import React from 'react';
import { FlatList, Text } from 'react-native';
import NewsListItem from './NewsListItem';
import NewsListSeperator from './NewsListSeperator';

const extractNewsItemKey = (item) => {
	return item.publishedAt;
}

const NewsList = ({ news, onNewsSelected }) => {

	const renderNewsItem = ({ item }) => {
		const onSelected = () => {
			onNewsSelected(item);
		}

		return (
			<NewsListItem item={ item } onNewsSelected={ onSelected }/>
		);
	};


	return (
		<FlatList
		data={ news }
		renderItem={ renderNewsItem }
		keyExtractor={ extractNewsItemKey}
		ItemSeparatorComponent={NewsListSeperator}
		/>
	)	
}

export default NewsList;