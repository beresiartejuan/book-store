import './App.css'
import { Route, Routes } from 'react-router-dom'
// pages
import { Home } from './pages/Home/Home'
import { SearchList } from './pages/SearchList/SearchList'
import { DetailBook } from './pages/Detail/DetailBook'
import{AboutUsSection} from './pages/AboutUs/AboutUsSection'
import{AllBooks} from './pages/AllBooks/AllBooks'
import{Authors} from './pages/Authors/Authors'
import{BuyPage} from './pages/BuyPage/BuyPage'
import{Contact} from './pages/Contact/Contact'
//componentes
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchList" element={<SearchList />} />
        <Route path="/DetailBook" element={<DetailBook />} />
        <Route path="/AboutUs" element={<AboutUsSection />} />
        <Route path="/AllBooks" element={<AllBooks />} />
        <Route path="/Authors" element={<Authors />} />
        <Route path="/BuyPage" element={<BuyPage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer /> 
    </div>
  )
}

export default App
