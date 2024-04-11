import React from 'react'
import styles from './MainCategories.module.css'

export const MainCategories = () => {
    const categories = [
        ["terror", "romance", "aventura", "cienciaFiccion", "drama", "comedia"],
        ["misterio", "fantasia", "infantil", "juvenil", "adulto"]
    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>¡Descubre las historias en nuestras selecciones!</h1>
            <section className={styles.containerCategory}>
                <ul className={styles.listCategory}>
                    {categories[0].map(category => (
                        <li className={styles.item} key={category}>
                            {category}
                        </li>
                    ))}
                </ul>
                <ul className={styles.listCategory}>
                    {categories[1].map(category => (
                        <li className={styles.item} key={category}>
                            {category}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
