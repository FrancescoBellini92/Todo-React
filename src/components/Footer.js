import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export default function footer ({location}) {
  return (
    <footer className="footer fixed-bottom bg-light mt-5 pt-2 text-center">
        <div className="container mb-2">
          <NavLink exact className="btn btn-primary mx-2" activeClassName="active"  to={`${location.pathname}/?completed`}>
            show completed
          </NavLink>
          <NavLink exact className="btn btn-light mx-2" activeClassName="active"   to={`${location.pathname}/?all`}>
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