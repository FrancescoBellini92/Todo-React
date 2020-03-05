import React from 'react';
import PropTypes from 'prop-types';
import { NavLink}  from 'react-router-dom';
import { FaList, FaTasks, FaLogout, FaBack } from './Icons';

function Nav ({activeClass, to, Icon, text}) {
  return (
    <li className="nav-item px-2">
        <NavLink className="nav-link" activeClassName={activeClass} to={to}> <Icon /> {text} </NavLink>
    </li>
  );
}

function List ({mediaQueryClass, children}) {
  return (
    <ul className={`nav nav-tabs mx-auto ${mediaQueryClass}`}>
      {children}
    </ul>
  );
}

export function ListHeader() {

  function ListNav ({mediaQueryClass}) {
    return (
      <List mediaQueryClass={mediaQueryClass}>
        <Nav activeClass="active" to="/" Icon={FaList} text="Lists" />
        <Nav activeClass="active" to="/logout" Icon={FaLogout} text="Logout" />
      </List>
    );
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <ListNav mediaQueryClass="lg-header" />
      <ListNav mediaQueryClass="sm-header" />
    </nav>
  );
}

export function TodosHeader() {

  function TodoNav({mediaQueryClass}) {
    return (    
      <List mediaQueryClass={mediaQueryClass}>
        <Nav activeClass="no" to="/" Icon={FaBack} text="" />
        <Nav activeClass="active" to="/todos" Icon={FaTasks} text="Tasks" />
        <Nav activeClass="active" to="/logout" Icon={FaLogout} text="Logout" />
      </List>
      );
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <TodoNav mediaQueryClass="lg-header" />
      <TodoNav mediaQueryClass="sm-header" />
  </nav>
  );
}

Nav.propTypes = {
  activeClass: PropTypes.string,
  to: PropTypes.string,
  icon:PropTypes.object,
  text: PropTypes.string
}
List.propTypes = {
  mediaQueryClass: PropTypes.string
}