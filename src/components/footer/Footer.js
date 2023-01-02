import React from 'react';
import './Footer.css';
import logo from "../../images/logo.png";
import logoText from "../../images/logo-text.png";

const Footer = () => {
  return (
    <div className="footer">
      <section className="logo-contact">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <img src={logoText} alt="logo text" />
        </div>
        <div className='footer-contact'>
          <table>
            <tr>
              <th>Opening hours</th>
              <th>Address</th>
              <th>Contact</th>
            </tr>
            <tr>
              <td>
                Mon - Sat 11am - 12pm <br />
                Sun 11am - 11pm
                </td>
              <td>
                24 Brew Lane <br />
                BR3 WL Cuptown
                </td>
              <td>
                +44 201 998 7562 <br />
                hello@yellowmountain.com
                </td>
            </tr>
          </table>
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default Footer;