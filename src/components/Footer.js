import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export default function footer ({location}) {
  return (
    <footer className="footer fixed-bottom bg-dark mt-5 pt-2 text-center">
        <div className="btn-group mb-2">
          <NavLink exact className="btn btn-outline-light" activeClassName="active"  to={`${location.pathname}/?completed`}>
            show completed
          </NavLink>
          <NavLink exact className="btn btn-outline-light" activeClassName="active"   to={`${location.pathname}/?all`}>
            show all
          </NavLink>
        </div>
  </footer>
  )
};

footer.propTypes = {
  filterTodo: PropTypes.func.isRequired,
  activeFilter: PropTypes.string
};