import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import { FaSearch, FaFilter } from './Icons'
import { useState } from 'react';

function FooterFilter ({path}) {
  if (path !== '/lists') {
    return (
      <div className="input-group">
        <div className="input-group-prepend dropup">
          <button type="button" className="btn btn-primary dropdown-toggle dropdon-toggle-split"  data-toggle="dropdown"
            aria-expanded="false" aria-label="Filter" title="Filter" aria-haspopup="true">
            <FaFilter />
          </button>
          <div className="dropdown-menu">
            <h6 className="dropdown-header bg-light">Filters</h6>
              <NavLink exact className="dropdown-item my-1" activeClassName="no" to={`${path}/?completed`}>
                show completed
              </NavLink>
              <NavLink exact className="dropdown-item my-1" activeClassName="no" to={`${path}/?pending`}>
                show pending
              </NavLink>
              <NavLink exact className="dropdown-item my-1 active" activeClassName="no" to={`${path}/?all`}>
                show all
              </NavLink>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function Footer ({ match}) {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="footer container-fluid fixed-bottom bg-light pt-2">
      <form className="form-inline my-2 justify-content-center mx-auto">
        <FooterFilter path={match.path} />
          <div className="input-group">
            <input type="search" className="form-control" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search..." />
            <div className="input-group-append">
              <NavLink  className="btn btn-primary" to={`/lists/search/${searchValue}`} title="Search" aria-label="Search">
                <FaSearch />
              </NavLink>
              </div>
          </div>
      </form>
  </div>
  )
};

Footer.propTypes = {
  filterTodo: PropTypes.func.isRequired,
  activeFilter: PropTypes.string
};
