import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.foot} >
            <div>
                <p className={styles.head}>LOGO</p>
                <p className={styles.item}>Direccion: 221B Baker Street</p>
                <p className={styles.item}>Telefono: 111 1111111</p>
                <p className={styles.item}>email: PaginasYaromas@gmail.com</p>
            </div>
            <div>
                <p className={styles.head}>Nosotros</p>
                <p className={styles.item}>Quienes somos?</p>
                <p className={styles.item}>Contacto</p>
            </div>
            <div>
                <p className={styles.head}>Seguinos en:</p>
                <ul className={styles.list}>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Likedin</li>
                </ul>
            </div>
        </footer>
    )
}
