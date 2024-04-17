import './App.css'
import { Home } from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import { SearchList } from './pages/SearchList/SearchList'
import { DetailBook } from './pages/Detail/DetailBook'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

//  faltan agregar rutas : Contacto, Quienes somos, Carrito, allBooks, Autores, etc
function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchList" element={<SearchList />} />
        <Route path="/DetailBook" element={<DetailBook />} />
      </Routes>
      <Footer /> 
    </div>
  )
}

export default App
