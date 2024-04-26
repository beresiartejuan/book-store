import { Offers } from '../../components/Offers/Offers'
import { BestSellers } from '../../components/BestSellers/BestSellers'
import { MainCategories } from '../../components/MainCategories/MainCategories'
import { FirstView } from '../../components/firstview/FirstView'
import libros from "./../../DMockeado/books";

import './Home.module.scss';

export default function Home() {

  return (
    <>
      <FirstView />
      <Offers books={libros} />
      <BestSellers books={libros} />
      <MainCategories />
    </>
  )

}
