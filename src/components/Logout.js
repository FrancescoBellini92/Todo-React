import { useEffect, useContext } from 'react';
import { UserContext } from '../containers/UserContext';
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