 import React from 'react';
 import PropTypes from 'prop-types';
 
export function BaseList ({children}) {
  return (
    <ul className="list-group mb-5 pb-5">
       {children}
    </ul>
  );
}

export function DecoratedList ({array, children}) {
  if (!array.length)  {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-secondary" style={{width: "3rem", height: "3rem"}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ); 
    } else {
      return  children;
  }
}


DecoratedList.propTypes = {
  array: PropTypes.array
};