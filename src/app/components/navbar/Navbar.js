// components/navbar/Navbar.js
"use client";
import Link from 'next/link';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.link}>
        <div className={styles.logo}>Logo</div>
      </Link>
      <Link href="/place" className={styles.link}>
        <div className={styles.navItem}>Place</div>
      </Link>
      <Link href="/about" className={styles.link}>
        <div className={styles.navItem}>About</div>
      </Link>
      
      <Link href="/login" className={styles.link}>
        <div className={styles.navItem}>Login</div>
      </Link>
    </nav>
  );
};

export default Navbar;
