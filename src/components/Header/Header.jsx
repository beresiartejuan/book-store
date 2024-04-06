import React from 'react'
import styles from './Header.module.css'
import { SearchBox } from '../SearchBox/SearchBox'

export const Header = () => {
  return (
    <nav className={styles.nav}>
        <span className={styles.logo}> logo</span>
        <SearchBox />
        <ul className={styles.menu} >
            <li className={styles.menuItem} >Home</li>
            <li className={styles.menuItem}>Books</li>
            <li className={styles.menuItem}>Authors</li>
            <li className={styles.menuItem} >Cart</li>
        </ul>
    </nav>
  )
}
