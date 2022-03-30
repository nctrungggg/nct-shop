import React from "react";
import "./styles.scss";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
Footer.propTypes = {};



function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo-col">
          <p className="footer-logo">N C T</p>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/trungg.nguyen.3576/">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nctrungg/">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://github.com/nctrungggg">
                <GitHubIcon />
              </a>
            </li>
          </ul>
          <p className="copyright">
            Copyright © 2022 by NCT, Inc. All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">Trau quy - Gia Lam - Ha Noi</p>
            <p>
              <a className="footer-link" href="tel:0967-439-521">
                0967 439 521
              </a>
              <br />
              <a
                className="footer-link"
                href="mailto:nctrung04102000@gmail.com"
              >
                nctrung04102000@gmail.com
              </a>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Create account
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                About NCT
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Recipe directory{" "}
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
