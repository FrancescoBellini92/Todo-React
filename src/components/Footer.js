import React from 'react';
import Form from 'react-bootstrap/Form';

export function Footer({children}) {
  return (
    <footer className="footer container-fluid fixed-bottom bg-light pt-2">
      <Form inline className="my-2 text-center justify-content-center mx-auto">
        {children}
      </Form>
  </footer>
  )
}


