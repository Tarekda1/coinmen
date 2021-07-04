import axios from 'axios';

//axios.defaults.baseURL = 'https://gh-trending-api.herokuapp.com';

export async function getTrendingRepos() {
	const result = await fetch(`/repositories`, {
		method: 'GET',
		mode: 'no-cors',
		credentials: 'same-origin' // It can be include, same-origin, omit
	});
	const data = await result.json();
	return data;
}

export async function getTrendingDevs() {
	const result = await fetch(`/developers`, {
		method: 'GET',
		mode: 'no-cors',
		credentials: 'same-origin' // It can be include, same-origin, omit
	});
	const data = await result.json();
	return data;
}

export default { getTrendingRepos, getTrendingDevs };
