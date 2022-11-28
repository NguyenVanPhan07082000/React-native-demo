import { LoginPayload } from 'src/model';
import { axiosClient } from './axios-client';

export const authApi = {
    login(payload: LoginPayload) {
        return axiosClient.post('/login', payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    },
    logout() {
        return axiosClient.post('/logout');
    },
    getProfile(token: string) {
        return axiosClient.get('/profile', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
    },
    getAllUser(token: string) {
        return axiosClient.get('/user', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
    },

    postForgotPw(payload: { Email: string }) {
        return axiosClient.post('/user/forgot-pasword', payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    },
    getVerifyCode(payload: { UserId: string; Code: string }) {
        return axiosClient.post('/user/verify-code', payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    },
};
