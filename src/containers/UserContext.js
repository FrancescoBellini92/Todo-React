/*
Here we create a context and higher order component returning a context provider.cover-fill
Our aim is to make available the user state to all components in the children tree.

Context state initial Source of Truth is user state stored in localStorage.
*/

import React, {useState, createContext} from 'react';
import Auth from '../auth/auth';
export const UserContext = createContext(Auth.getUser());

export function UserProvider (props) {
    const [user, setUser] = useState(Auth.getUser());
    return (
    <UserContext.Provider value={[user, setUser]} >
        {props.children}
    </UserContext.Provider>
    );
}