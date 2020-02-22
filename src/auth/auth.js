import axios from 'axios';
import { APIAUTHURL } from '../config/config';

function auth( ) {
    const getToken =  () => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth) {
            return auth.acees_token;
        } 
    }

    const addAxiosToken = () => {
        const token  =  getToken();
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }
    }
}