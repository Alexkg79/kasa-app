import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Layout.scss';

function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="layout-content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
