/*
Here we define the header component, that consume UserContext state by using the useContext hook
*/

import React from 'react';
import { NavLink}  from 'react-router-dom';
import { FaList, FaTasks, FaLogout, FaBack } from './Icons';

export function ListHeader() {
  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav nav-tabs mx-auto sm-header">
        <li className="nav-item px-2">
          <NavLink className="nav-link" activeClassName="active" to="/"><FaList /> </NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link" activeClassName="active" to="/logout"><FaLogout /> </NavLink>
        </li>
      </ul>
      <ul className="nav nav-tabs mx-auto lg-header">
        <li className="nav-item px-2">
          <NavLink className="nav-link" activeClassName="active" to="/"><FaList /> Lists </NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link" activeClassName="active" to="/logout"><FaLogout /> Logout </NavLink>
        </li>
      </ul>
  </nav>
  )
}

export function TodosHeader() {
  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav nav-tabs mx-auto sm-header">
        <li className="nav-item px-2">
          <NavLink className="nav-link" activeClassName="no" to="/"> <FaBack /> </NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link active" activeClassName="active" to="/todos"><FaTasks /> </NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link" activeClassName="active" to="/logout"><FaLogout /> </NavLink>
        </li>
      </ul>
      <ul className="nav nav-tabs mx-auto lg-header">
        <li className="nav-item px-2">
          <NavLink className="nav-link" activeClassName="no" to="/"> <FaBack /> </NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link active" activeClassName="active" to="/todos"><FaTasks /> Todos </NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link" activeClassName="active" to="/logout"><FaLogout /> Logout </NavLink>
        </li>
      </ul>
  </nav>
  )
}
