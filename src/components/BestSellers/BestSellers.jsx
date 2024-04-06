import React from 'react'
import { Card } from '../Card/Card'
import styles from './BestSellers.module.css'

export const BestSellers = () => {
    return (
        <div className={styles.containerBestSellers}>
            <h1 className={styles.title}>Best Sellers  </h1>
            <section className={styles.BestSellers}>
                <Card />
                <Card />
                <Card />
            </section>
        </div>
    )
}
