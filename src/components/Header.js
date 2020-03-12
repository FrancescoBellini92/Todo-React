import React from 'react';
import PropTypes from 'prop-types';
import { NavLink}  from 'react-router-dom';
import BSNav from 'react-bootstrap/Nav';

import { FaList, FaTasks, FaLogout, FaBack } from './Icons';

function Nav ({activeClass, to, Icon, text}) {
  return (
    <BSNav.Item className="px-2">
        <NavLink className="nav-link" activeClassName={activeClass} to={to} title={text} aria-label={text}> <Icon /> {text} </NavLink>
    </BSNav.Item>
  );
}

function List ({mediaQueryClass, children}) {
  return (
    <BSNav variant="tabs" className={`mx-auto ${mediaQueryClass}`}>
      {children}
    </BSNav>
  );
}

function Header ({children}) {
  return (
  <header className="sticky-top">
    <nav className="navbar navbar-light bg-light">
      {children}
    </nav>
  </header>)
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
    <Header>
        <ListNav mediaQueryClass="lg-header" />
        <ListNav mediaQueryClass="sm-header" />
    </Header>
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
    <Header>
        <TodoNav mediaQueryClass="lg-header" />
        <TodoNav mediaQueryClass="sm-header" />

    </Header>
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