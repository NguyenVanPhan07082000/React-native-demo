import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { SERVER_DOMAIN } from '../contant';

export const axiosClient = axios.create({
    baseURL: `${SERVER_DOMAIN}api`,
    headers: {
        'Content-Type': 'application/json',
    },
});
// axiosClient.interceptors.response.use(
//     function (response) {
//         return response.data;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );
// //
axiosClient.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;
