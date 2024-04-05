import React from 'react'
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.foot} >
            <div>
                <p className={styles.head}>LOGO</p>
                <p className={styles.item}>direccion</p>
                <p className={styles.item}>telefono</p>
                <p className={styles.item}>email</p>
            </div>
            <div>
                <p className={styles.head}>Nosotros</p>
                <p className={styles.item}>Quienes somos?</p>
                <p className={styles.item}>Contacto</p>
            </div>
            <div>
                <p className={styles.head}>Seguinos en:</p>
                <ul className={styles.list}>
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>likedin</li>
                </ul>
            </div>
        </footer>
    )
}
