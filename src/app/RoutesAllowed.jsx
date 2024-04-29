import { Route, Routes } from "react-router-dom";

import Home from './../pages/Home'
import SearchList from './../pages/SearchList'
import DetailBook from './../pages/Detail'
import AboutUsSection from './../pages/AboutUsSection'
import AllBooks from './../pages/AllBooks'
import Authors from './../pages/Authors'
import BuyPage from './../pages/BuyPage'
import Contact from './../pages/Contact'

export default function RoutesAllowed() {

    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<SearchList />}></Route>
            <Route path='/books/:id' element={<DetailBook />}></Route>
            <Route path='/about-use' element={<AboutUsSection />}></Route>
            <Route path='/books' element={<AllBooks />}></Route>
            <Route path='/authors' element={<Authors />}></Route>
            <Route path='/buy' element={<BuyPage />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    )

}