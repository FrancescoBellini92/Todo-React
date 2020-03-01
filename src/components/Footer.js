import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import { FaSearch, FaFilter } from './Icons'
import { useState } from 'react';



export function ListFooter () {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="footer container-fluid fixed-bottom bg-light pt-2">
      <form className="form-inline my-2 justify-content-center mx-auto">
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

export function TodoFooter ({ match, filter}) {
  let completedBtnClass;
  let pendingBtnClass;
  let allBtnClass;

  completedBtnClass = pendingBtnClass = allBtnClass = 'btn-secondary';

  switch (filter) {
    case 'completed':
      completedBtnClass = 'btn-primary';
      break;
    case 'pending':
      pendingBtnClass = 'btn-primary';
      break;
    default:
      allBtnClass = 'btn-primary';

  }

  return (
    <div className="footer container-fluid fixed-bottom bg-light pt-2">
      <form className="form-inline my-2 justify-content-center mx-auto">
        <div class="conainer lg-btn">
          <NavLink exact className={`btn btn-sm ${completedBtnClass} mx-2`} to={`${match.url}?filter=completed`}>
            <FaFilter /> show completed
          </NavLink>
          <NavLink exact className={`btn btn-sm ${pendingBtnClass} mx-2`} to={`${match.url}?filter=pending`}>
            <FaFilter /> show pending
          </NavLink>
          <NavLink exact className={`btn btn-sm ${allBtnClass} mx-2`}   to={match.url}>
            <FaFilter /> show all
          </NavLink>
        </div>
        <div class="conainer sm-btn">
          <NavLink exact className={`btn btn-sm ${completedBtnClass} mx-2`} to={`${match.url}?filter=completed`}>
            <FaFilter /> completed
          </NavLink>
          <NavLink exact className={`btn btn-sm ${pendingBtnClass} mx-2`} to={`${match.url}?filter=pending`}>
            <FaFilter /> pending
          </NavLink>
          <NavLink exact className={`btn btn-sm ${allBtnClass} mx-2`}   to={match.url}>
            <FaFilter /> all
          </NavLink>
        </div>
      </form>
  </div>
  )
};

TodoFooter.propTypes = {
 filter: PropTypes.bool,
 match: PropTypes.shape
};
