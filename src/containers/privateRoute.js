import React from 'react';
import {Route} from 'react-router-dom';
import Auth from '../auth/auth';

export default function PrivateRouter(props) {
    if (Auth.getUser) {
        return <Route {...props} />
    }
    return null;

}