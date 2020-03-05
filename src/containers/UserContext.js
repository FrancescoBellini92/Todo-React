import React, { useState, createContext } from 'react';
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