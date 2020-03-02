import axios from 'axios';
import { APIAUTHURL } from '../config/config';

function auth( ) {
    const getToken =  () => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth) {
            return auth.access_token;
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
            addAxiosToken();
            const user = await axios.post(`${APIAUTHURL}me`);
            localStorage.setItem('user', JSON.stringify(user.data.id));
            return result.data;
        } catch (e) {
           return Promise.reject('wrong username or password');
        }
    }

    const signup = () => {};

    const logout = async () => {
        addAxiosToken();
        try {
            const result =  await axios.post(`${APIAUTHURL}logout`);
            localStorage.removeItem('auth');
            localStorage.removeItem('user');
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    const getUser = () =>{
        const user = JSON.parse(localStorage.getItem('user')); 
        if(user){
            return user;
        }
        return null;
     }

    return {
        signin, 
        signup,
        logout,
        getUser
    }
}

const authMethods = auth();
export default authMethods;