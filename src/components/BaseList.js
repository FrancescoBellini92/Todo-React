 import React from 'react';
 
export default function BaseList ({children}) {
  return (
    <ul className="list-group mb-5 pb-5">
       {children}
    </ul>
  );
}