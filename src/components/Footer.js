import React from 'react';

export function Footer({children}) {
  return (
    <div className="footer container-fluid fixed-bottom bg-light pt-2">
      <form className="form-inline my-2 text-center justify-content-center mx-auto">
        {children}
      </form>
  </div>
  )
}


