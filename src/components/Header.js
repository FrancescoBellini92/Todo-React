import React from 'react';
import PropTypes from 'prop-types';
import {NavLink}  from 'react-router-dom';
import BSNav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {FaList, FaTasks, FaLogout, FaBack} from './Icons';

const GoBack = () => {
  return (
    <BSNav.Item className="">
       <Button variant="nav-link text-primary" 
        onClick={() => window.history.back()} 
        title="back" aria-label="back"> 
          <FaBack />
        </Button>
    </BSNav.Item>);
};

function Nav ({activeClass, to, Icon, text}) {
  return (
    <BSNav.Item className="">
        <NavLink className="nav-link" 
          activeClassName={activeClass} 
          to={to} title={text} 
          aria-label={text}>
            <Icon /> 
            {text} 
        </NavLink>
    </BSNav.Item>
  );
}

function List ({children}) {
  return (
    <BSNav variant="tabs" className={`mx-auto`}>
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

  function ListNav () {
    return (
      <List>
        <Nav activeClass="active" to="/" Icon={FaList} text="Lists" />
        <Nav activeClass="active" to="/logout" Icon={FaLogout} text="Logout" />
      </List>
    );
  }

  return (
    <Header>
        <ListNav />
    </Header>
  );
}

export function TodosHeader() {

  function TodoNav() {
    return (    
        <List>
          <GoBack />
          <Nav activeClass="active" to="/lists " Icon={FaList} text="Lists" />
          <BSNav.Item className="">
            <BSNav.Link className="active"><FaTasks /> Tasks</BSNav.Link>
          </BSNav.Item>
          <Nav activeClass="active" to="/logout" Icon={FaLogout} text="" />
        </List>
      );
  }

  return (
    <Header>
        <TodoNav />
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