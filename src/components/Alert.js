import React, {useState, useEffect} from 'react';
import {Alert} from 'react-bootstrap';

export default function DetailsAlert({deleted, updated}) {
    let variant = 'primary';
    if (deleted) {
      variant = 'danger';
    } else if (updated) {
      variant = 'success';
    }
    let content = 'Todo details';
    if (deleted) {
      content = 'Todo has been deleted' 
    } else if (updated) {
      content = 'Todo has been updated'
    }
    let [animation, setAnimation]  = useState(null);

    useEffect(() => {deleted || updated ? setAnimation('fadeIn-show') : setAnimation(null); console.log('test');}, [deleted, updated]);
    return (
      <Alert variant={variant} className={`text-center my-3 ${animation}`}>
        {content}
      </Alert>
    );
  }