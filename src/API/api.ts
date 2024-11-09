export const API = import.meta.env.VITE_API_URL;

import axios from 'axios';

const api = axios.create({
    baseURL: API, // Укажите базовый URL API
    withCredentials: true, // Всегда отправлять куки с запросами
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;