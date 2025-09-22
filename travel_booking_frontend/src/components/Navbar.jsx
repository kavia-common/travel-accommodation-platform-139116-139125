import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

/**
 * PUBLIC_INTERFACE
 * A simple top navigation bar modeled from the static assets.
 * Provides links to: Home, Create Package, Packages, and a sample CTA.
 */
export default function Navbar() {
  return (
    <div className={styles.topnav}>
      <div className={styles.logoWrap}>
        <Link to="/" className={styles.logoText}>Travel</Link>
        <div className={styles.logoArrow} />
      </div>
      <div className={styles.navItems}>
        <NavLink to="/" className={styles.navLink}>Home</NavLink>
        <NavLink to="/about" className={styles.navLink}>About</NavLink>
        <NavLink to="/services" className={styles.navLink}>Services</NavLink>
        <NavLink to="/packages" className={styles.navLink}>Upcoming Packages</NavLink>
      </div>
      <div className={styles.ctaWrap}>
        <a href="#contact" className={styles.ctaBtn}>Get in Touch</a>
      </div>
    </div>
  );
}
