import React from 'react'
import { Card } from '../Card/Card'
import style from './Offers.module.css'


export const Offers = ({books}) => {
    const Ofertas = books.slice(0,3)
    return (
        <div className= {style.containerOfferts}>
            <h2 className= {style.title}>Ofertas</h2>
            <section className= {style.Offerts}>
                {Ofertas?.map((item) => {
                   return <Card book={item.book}/>
                })}
            </section>
        </div>
    )
}
