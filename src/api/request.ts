import axios from 'axios';

const request = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: { 'Content-Type': 'application/json' },
});

const noTokenURLLists = ['study'];

request.interceptors.request.use(
	config => {
		if (!noTokenURLLists.includes(config.url || '')) return config;
		const token = localStorage.getItem('TOKEN');
		if (!token) return config;
		config.headers.Authorization = token;
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

export default request;
