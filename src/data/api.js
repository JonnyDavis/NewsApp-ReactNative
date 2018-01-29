import axios from 'axios';

function getAllNews() {
	const url = 'https://newsapi.org/v2/everything?sources=bbc-news&language=en&apiKey=ccb694f89f2940d5b6b36301d190a16a';
	const promise = axios.get(url);
	return promise;
}

export {
	getAllNews
};