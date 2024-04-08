import React from 'react'
import styles from './MainCategories.module.css'

export const MainCategories = () => {
    const categories = [
        [terror, romance, aventura, cienciaFiccion, drama, comedia],
        [misterio, fantasia, infantil, juvenil, adulto]
    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Descubre las historias en nuestras selecciones!</h1>
            <ul className={styles.containerCategory}>
                <section className={styles.listCategory}>
                    {categories[0].map(category => (
                        <li key={category.id}>
                            <span  >{category.name}</span>
                        </li>
                    ))}
                </section>
                <section className={styles.listCategory}>
                    {categories[1].map(category => (
                        <li key={category.id}>
                            <span>{category.name}</span>
                        </li>
                    ))}
                </section>
            </ul>
        </div>
    )
}
