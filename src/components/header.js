/*
Here we define the header component, that consume UserContext state by using the useContext hook
*/

import React, { useContext} from 'react';
import {UserContext} from '../containers/UserContext';
import {NavLink} from 'react-router-dom';

export default function Header() {
  const [user] = useContext(UserContext);
  if (user) {
    return (
      <nav className="navbar navbar-light bg-light">
        <ul className="nav nav-tabs mx-auto">
          <li className="nav-item px-2">
            <NavLink className="nav-link" activeClassName="active" to="/lists">LISTS </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" activeClassName="active" to="/todos">TODOS </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" activeClassName="active" to="/logout">LOGOUT </NavLink>
          </li>
        </ul>
    </nav>
    )
  }
    return (
      <nav className="navbar navbar-light bg-light">
          <ul className="nav nav-tabs mx-auto">
          <li className="nav-item px-2">
            <NavLink className="nav-link" activeClassName="active" to="/login">LOGIN</NavLink>
          </li>
        </ul>
    </nav>
    )
  }