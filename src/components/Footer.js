import React from 'react';
import FooterBtn from './footerBtn';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export default function Footer ({filterTodo, activeFilter, match}) {
  let allColor;
  let completedColor;
  allColor = completedColor = "btn-light";
  switch (activeFilter) {
    case "completed":
      completedColor = "btn-primary";
      break;
    default:
      allColor = "btn-primary";
      break;
  }
  return (
    <footer className="footer fixed-bottom bg-dark mt-5 pt-2 text-center">
        <div className="btn-group mb-2">
          <FooterBtn action={() => {filterTodo('completed')}} text="Show completed" color={completedColor}/>
          <FooterBtn action={() => {filterTodo(null)}}  text="Show all" color={allColor} />
        </div>
  </footer>
  );
}

Footer.propTypes = {
  filterTodo: PropTypes.func.isRequired,
  activeFilter: PropTypes.string
};