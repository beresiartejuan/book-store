import React from 'react'
import { Card } from '../Card/Card'
import style from './Offers.module.css'

export const Offers = () => {
    return (
        <div className= {style.containerOfferts}>
            <h2 className= {style.title}>Ofertas</h2>
            <section className= {style.Offerts}>
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </div>
    )
}
