import axios from 'axios';

export const frutasApi = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});
