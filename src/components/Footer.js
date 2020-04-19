import React from 'react';
import {Button, Form} from 'react-bootstrap';

export const Footer = ({children}) => {
  return (
    <footer className="footer container-fluid fixed-bottom bg-light pt-2">
      <Form inline className="my-2 text-center justify-content-center mx-auto">
        {children}
      </Form>
  </footer>
  )
}

export const ContextSpecificButton = props => {
  if (props.context) {
    return (
      <Button {...props} disabled>
        {props.children}
      </Button>
    );
  }
  return (
    <Button {...props} >
      {props.children}
    </Button>
  );
}

