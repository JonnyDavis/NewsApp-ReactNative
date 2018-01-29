import { getAllNews } from '../data/api';

const initialState = {
	collection: []
};

const types = {
	FETCH_NEWS: '[News] Fetch',
	FETCH_NEWS_SUCCESS: '[News] Fetch Success'
};

const actionCreators = {
	fetchNewsSuccess: (data) => {
		return {
			type: types.FETCH_NEWS_SUCCESS,
			payload: data
		}
	}
}

const fetchNews = () => {
	return (dispatch) => {
		const promise = getAllNews();
		promise.then((response) => {

			dispatch(actionCreators.fetchNewsSuccess(response.data));
		});
	};
};
