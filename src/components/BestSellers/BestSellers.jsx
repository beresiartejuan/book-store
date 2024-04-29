import { Card } from '../Card/Card'
import styles from './BestSellers.module.css'

export const BestSellers = ({ books }) => {
    const bestSellers = books.slice(-4)
    return (
        <div className={styles.containerBestSellers}>
            <h1 className={styles.title}>Best Sellers  </h1>
            <section className={styles.BestSellers}>
                {bestSellers?.map((item) => {
                    return <Card key={item.book.id + "BS"} book={item.book} />
                })}

            </section>
        </div>
    )
}
