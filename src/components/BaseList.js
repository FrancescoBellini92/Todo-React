 import React from 'react';
 import PropTypes from 'prop-types';
 import {Spinner, ListGroup}  from 'react-bootstrap';
 
export function BaseList ({children}) {
  return (
    <ListGroup as="ul" className="mb-5 pb-5">
       {children}
    </ListGroup>
  );
}

export function DecoratedList ({array, children}) {
  if (array.includes('pending'))  {
    return   <div className="text-center mt-5"><Spinner animation="border" className="text-secondary" /></div>; 
  } else if (!array.length) {
    return null;
  } else {
    return children;
  }
}


DecoratedList.propTypes = {
  array: PropTypes.array
};