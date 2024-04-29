import { Card } from '../Card/Card'
import style from './Offers.module.css'


export const Offers = ({ books }) => {
    const Ofertas = books.slice(0, 4)
    return (
        <div className={style.containerOfferts}>
            <h1 className={style.title}>Ofertas!!!</h1>
            <section className={style.Offerts}>
                {Ofertas?.map((item) => {
                    return <Card key={item.book.id + "Offer"} book={item.book} />
                })}
            </section>
        </div>
    )
}
