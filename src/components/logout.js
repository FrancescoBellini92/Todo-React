import React, { useEffect} from 'react';
import Auth from '../auth/auth';

export default function Logout (pars) {
    useEffect(() => {
        Auth.logout();
        pars.history.push('/login');

    },[]);
    return null;
}