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

    const signin = async (email, password) => {
        try {
            const result = await axios.post(`${APIAUTHURL}login`,
            {
                email,
                password
            });
            localStorage.setItem('auth', JSON.stringify(result.data));
            return result.data;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    const signup = () => {};

    const logout = async () => {
        addAxiosToken();
        try {
            const result =  await axios.post(`${APIAUTHURL}logout`);
            localStorage.removeItem('auth');
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    const refresh = () => {};

    return {
        signin, 
        signup,
        logout,
        refresh
    }
}

const authMethods = auth();
export default authMethods;