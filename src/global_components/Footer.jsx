import React from "react";
import "@/styles/footer.scss";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="foot-top">
        <div className="_container">
          <div>
            <Link href="/">
              <img src="/images/logo-white.svg" width={235} alt="logo" />
            </Link>
            <p>
              Rapid HR Connect: tailored HR <br />
              solutions for your business
            </p>
            <div className="address">
              <div>Registered address:</div>
              <div>Office address:</div>
              <div>Email:</div>
              <div>Phone:</div>
            </div>
          </div>
          <div>
            <span></span>
            <Link href="/retained-hr-support">Retained HR Support</Link>
            <Link href="/hr-project-management">HR Project Management</Link>
            <Link href="/flexible-hr-consultancy">Flexible HR Consultancy</Link>
            <Link href="/recruitment-assistance">Recruitment Assistance</Link>
            <Link href="/training-development">Training & Development</Link>
            <Link href="/hr-documentation">HR Documentation</Link>
          </div>
          <div>
            <span></span>
            <Link href="/our-approach">Our approach</Link>
            <Link href="/guides-and-insights">Guides and insights</Link>
            <Link href="/why-choose-us">Why choose us</Link>
            <Link href="#">Get in touch</Link>
            <Link href="#">FAQ HR</Link>
          </div>
          <div>
            <span></span>
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Refund Policy</Link>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="_container">
          © {currentYear} Rapidhire LTD. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
