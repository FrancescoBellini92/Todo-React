/*
Here we define the logout component, that consume UserContext state by using useContext hook
*/

import {useEffect, useContext} from 'react';
import {UserContext} from '../containers/UserContext';
import Auth from '../auth/auth';

export default function Logout (pars) {
    const [,setUser] = useContext(UserContext);
    useEffect(() => {
        Auth.logout();
        setUser(null);
        pars.history.push('/login');

    },);
    return null;
}