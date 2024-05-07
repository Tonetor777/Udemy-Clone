import React from 'react';

const Link = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const SocialMedia = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="social-media-icon">
    {children}
  </a>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <Link href="/about-us">About us</Link>
      <Link href="/contact-us">Contact us</Link>
      <Link href="/careers">Careers</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/help-and-support">Help and Support</Link>
      <Link href="/affiliate">Affiliate</Link>
      <Link href="/investors">Investors</Link>
      <Link href="/terms">Terms</Link>
      <Link href="/privacy-policy">Privacy Policy</Link>
      <Link href="/cookie-settings">Cookie Settings</Link>
      <Link href="/accessibility-statement">Accessibility Statement</Link>
    </div>
    <div className="social-media">
      <SocialMedia href="https://www.facebook.com/udemy">
        <i className="facebook" />
      </SocialMedia>
      <SocialMedia href="https://twitter.com/udemy">
        <i className="twitter" />
      </SocialMedia>
      <SocialMedia href="https://www.linkedin.com/company/udemy-inc-">
        <i className="linkedin" />
      </SocialMedia>
    </div>
    <div className="copyright">
      &copy; {new Date().getFullYear()} Udemy, Inc. All rights reserved. 
      </div>
      </footer>
      )

      export default footer;