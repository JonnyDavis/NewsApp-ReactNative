import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import NewsListScreen from './screens/NewsListScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';

const extraStyles = Platform.select({
	android: {
		marginTop: Constants.statusBarHeight
	}
});


export default StackNavigator({
	List: { screen: NewsListScreen },
	Detail: { screen: NewsDetailScreen }
}, 	{
	cardStyle: {
		backgroundColor: '#fff'
	},
	navigationOptions: {
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#BE0B1E',
			...extraStyles
		}
	},
}
);