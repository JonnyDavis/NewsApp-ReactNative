import React from 'react';
import { View, StyleSheet } from 'react-native';


const NewsListSeperator = () => {
	return (
		<View style={styles.container} />
	);
};

export default NewsListSeperator;

const styles = StyleSheet.create({
	container: {
		marginLeft: 12,
		borderBottomWidth: 1,
		borderBottomColor: '#c0c0c0'
	}
});