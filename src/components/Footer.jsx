// import React from 'react'
import styles from "../styles/Homepage.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.footerColumn}>
        <h3>Company</h3>
        <ul>
          <li>About us</li>
          <li>Partnership</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>EzFix AI</li>
          <li>The Team</li>
        </ul>
      </div>
      <div className={styles.footerColumn}>
        <h3>Customer</h3>
        <ul>
          <li>How to use EzFix</li>
          <li>Pros near me</li>
          <li>EzFix for Business</li>
          <li>24/7 Resources</li>
          <li>Contracts</li>
          <li>When do I need EzFix</li>
        </ul>
      </div>
      <div className={styles.footerColumn}>
        <h3>Pros</h3>
        <ul>
          <li>EzFix for Pros</li>
          <li>Sign Up as a Pro</li>
          <li>Community</li>
          <li>Pro resources</li>
          <li>Pro reviews</li>
          <li>How to sign up as Pro</li>
        </ul>
      </div>
      <div className={styles.footerColumn}>
        <h3>Support</h3>
        <ul>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Code of conduct</li>
          <li>Licensing</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
        </ul>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <span>Privacy Policy</span>
      <span>Accessibility</span>
      <span>Terms</span>
    </div>
  </div>
  )
}

export default Footer
