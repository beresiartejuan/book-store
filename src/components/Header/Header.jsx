import React from 'react'
import styles from './Header.module.css'
import { SearchBox } from '../SearchBox/SearchBox'
import { Link } from 'wouter'


export const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        logo
      </Link>
      <SearchBox />
      <ul className={styles.menu} >
        <li className={styles.menuItem} >
          <Link to="/" className={styles.menuItem}>
            Home
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/AllBooks" className={styles.menuItem}>
            Books
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/Authors" className={styles.menuItem}>
            Authors
          </Link>
        </li>
        <li className={styles.menuItem} >
          <Link to="/BuyPage" className={styles.menuItem}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  )
}
