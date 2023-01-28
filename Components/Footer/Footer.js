import React from 'react';

const Footer = () => {
    return (
      <div className="bg-slate-700">
        <footer className="footer p-10 lg:w-4/5 lg:mx-auto text-base-content">
          <div>
            <img
              className="w-3/2 h-2/3"
              src="https://i.ibb.co/k0gS3xf/logo-1-removebg-preview.png"
              alt=""
            />
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
    );
};

export default Footer;