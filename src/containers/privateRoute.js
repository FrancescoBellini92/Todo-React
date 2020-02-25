/*
Here we create a higher order component so that we can programmatically control wether routes are 
being returned or we should redirect to login page 
*/

import React, {useContext} from 'react';
import {UserContext} from './userContext';
import {Route, Redirect} from 'react-router-dom';

export default function PrivateRouter(props) {
    const [user] = useContext(UserContext);
    if (user) {
        return <Route {...props} />
    }
    return <Redirect to={'/login'} />;
}