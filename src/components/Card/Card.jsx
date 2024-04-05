import React from 'react'
import style from './Card.module.css'

export const Card = () => {
  return (
    <article className={style.card}>
        <img className={style.image} src="" alt="imagen"/>
        <section className={style.info}>
            <span className={style.title}>
                loren ipso
            </span>
            <section className={style.shoping}>
                <span className={style.price}>
                    $100
                </span>
                <button className={style.buy}>
                    Comprar
                </button>
            </section>
        </section>
    </article>
  )
}
