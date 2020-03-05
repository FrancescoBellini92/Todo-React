import React, {useContext} from 'react';
import { UserContext } from './UserContext';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRouter(props) {
  const [user] = useContext(UserContext);
  if (user) {
    return <Route {...props} />
  }
  return <Redirect to={'/login'} />;
}