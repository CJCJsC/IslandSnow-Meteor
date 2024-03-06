import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer>
    <div className="container">
      <div className="row pt-3">
        <div className="col">
          NAVIGATION
          <hr />
          <div>About us</div>
          <div>Employment</div>
          <div>Videos</div>
        </div>
        <div className="col">
          MAIN MENU
          <hr />
          <div>Menu</div>
          <div>Women</div>
          <div>Kids</div>
        </div>
        <div className="col">
          CONNECT
          <hr />
          <div>Sign up for the latest updates</div>
          <label>
            <input type="text" placeholder="Enter Email Address" />
          </label>
          <div className="btn btn-dark">Join</div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
