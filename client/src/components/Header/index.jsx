import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'

function Header (params) {
  return (
    <header className={styles.hero}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.link} >
            <Link  to='/'>Home</Link>
          </li>
          <li className={styles.link}>
            <Link  to='/profile'>User Profile</Link>
          </li>
          <li className={styles.link}>
            <Link  to='/users'>Users</Link>
          </li>
        </ul>
      </nav>
      <h1>Chat-FC</h1>
      <div className={styles.link}>
        <Link  to='/registration'>Registration</Link>
      </div>
      <div className={styles.link}>
        <Link  to='/login'>Login</Link>
      </div>
      
    </header>
  );
}

export default Header;
