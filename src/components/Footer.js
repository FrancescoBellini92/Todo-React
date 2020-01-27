import React from 'react';
import FooterBtn from './footerBtn';

export default function Footer ({filterTodo, activeFilter}) {
  let allColor;
  let completedColor;
  let deletedColor;
  allColor = completedColor =  deletedColor = "btn-light";
  switch (activeFilter) {
    case "completed":
      completedColor = "btn-primary";
      break;
    case "deleted":
      deletedColor = "btn-primary";
      break;
    default:
      allColor = "btn-primary";
      break;
  }
  return (
    <footer className="footer fixed-bottom bg-dark mt-auto text-center py-3">
        <div className="btn-group">
          <FooterBtn action={() => {filterTodo('completed')}} text="Show completed" color={completedColor}/>
          <FooterBtn action={() => {filterTodo(null)}}  text="Show all" color={allColor} />
          <FooterBtn action={() => {filterTodo('deleted')}}  text="Show deleted" color={deletedColor} />
        </div>
  </footer>
  );
}