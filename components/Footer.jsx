import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer>
      <div className="row">
        <div className="footer-col-1">
          <h3>Download App</h3>
          <a href="https://play.google.com"><img src="/images/playstore.png" width="180px" alt=""/></a>
          <a href="https://www.apple.com/in/app-store/"><img src="/images/appstore.png" width="180px" alt=""/></a>
        </div>
        <div className="footer-col-2">
          <img src="logo192.png" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vitae animi expedita
            distinctio aspernatur odio deleniti ratione nemo illum delectus?
          </p>
        </div>
        <div className="footer-col-3">
          <h3>Follow us</h3>
          <a href="https://www.facebook.com/"><img src="/images/icon-1.png" width="30px" alt="facebook"/></a>&nbsp;&nbsp;
          <a href="https://twitter.com/"><img src="/images/icon-2.png" width="40px" alt="twitter" /></a>&nbsp;&nbsp;
          <a href="https://www.instagram.com/"><img src="/images/icon-3.png" width="30px" alt="instagram"/></a>&nbsp;&nbsp;
        </div>
      </div>
      <hr />
      <p className="info">&copy;&nbsp;2023, gymansia.com, Inc. or its affiliates</p>
    </footer>
  );
}


export default Footer;
