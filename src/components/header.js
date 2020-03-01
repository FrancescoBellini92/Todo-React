/*
Here we define the header component, that consume UserContext state by using the useContext hook
*/

import React, { useContext } from 'react';
import { UserContext } from '../containers/UserContext';
import { NavLink}  from 'react-router-dom';
import { FaList, FaTasks, FaLogout } from './Icons';

export default function Header() {
  const [user] = useContext(UserContext);
  if (user) {
    return (
      <nav className="navbar navbar-light bg-light">
        <ul className="nav nav-tabs mx-auto sm-header">
          <li className="nav-item px-2">
            <NavLink className="nav-link" activeClassName="active" to="/lists"><FaList /> </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" activeClassName="active" to="/todos"><FaTasks /> </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" activeClassName="active" to="/logout"><FaLogout /> </NavLink>
          </li>
        </ul>
        <ul className="nav nav-tabs mx-auto lg-header">
          <li className="nav-item px-2">
            <NavLink className="nav-link" activeClassName="active" to="/lists"><FaList /> Lists </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" activeClassName="active" to="/todos"><FaTasks /> Todos </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" activeClassName="active" to="/logout"><FaLogout /> Logout </NavLink>
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