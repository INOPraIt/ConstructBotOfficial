import React from 'react';
import Navbar from '../Navbar';

const Layout = ({ children, setHeaderCardSelect, headerCardSelect }) => {
  return (
    <>
      <main>{children}</main>
      <div>
        <Navbar 
          setHeaderCardSelect={setHeaderCardSelect}
          headerCardSelect={headerCardSelect}
        />
      </div>
    </>
  )
}

export default Layout;

