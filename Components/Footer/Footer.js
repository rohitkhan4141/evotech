import Link from 'next/link';
import React from 'react';



const Footer = () => {
    return (
      <div className="bg-slate-700">
        <footer className="footer p-10 lg:w-4/5 lg:mx-auto text-base-content">
          <div>
            <img
              className="w-[80px] h-[100px]"
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
            <Link href='/' className="link link-hover">Branding</Link>
            <Link href='/' className="link link-hover">Design</Link>
            <Link href='/' className="link link-hover">Marketing</Link>
            <Link href='/' className="link link-hover">Advertisement</Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link href='/' className="link link-hover">About us</Link>
            <Link href='/' className="link link-hover">Contact</Link>
            <Link href='/' className="link link-hover">Jobs</Link>
            <Link href='/' className="link link-hover">Press kit</Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link href='/' className="link link-hover">Terms of use</Link>
            <Link href='/' className="link link-hover">Privacy policy</Link>
            <Link href='/' className="link link-hover">Cookie policy</Link>
          </div>
        </footer>
      </div>
    );
};

export default Footer;