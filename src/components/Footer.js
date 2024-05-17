import React from 'react';
import logoFooter from '../assets/LOGO_FOOTER.png'; 
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <img src={logoFooter} alt="Kasa Logo footer" className="logoFooter" />
          <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
