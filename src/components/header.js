import React from 'react';
import {NavLink} from 'react-router-dom';
import Auth from '../auth/auth';

export default function navBar() {
  if (Auth.getUser()) {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <h1 className="navbar-brand">Todo App</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" 
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto">
          <li className="nav-item ">
            <NavLink className="nav-link" activeClassName="active" to="/lists">LISTS </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/todos">TODOS </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/logout">LOGOUT </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    )
  }
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <h1 className="navbar-brand">Todo App</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" 
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/login">LOGIN</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/signup">SIGNUP </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    )
  }