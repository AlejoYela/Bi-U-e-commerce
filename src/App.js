import './App.css'

import { Routes, Route } from 'react-router-dom'
import Navegador from './components/Navegador.jsx'
import Footer from './components/Footer.jsx'
import Producto from './views/Producto.jsx'
import All from './views/All.jsx'
import Landing from './views/Landing.jsx'
import Favoritos from './views/Favoritos.jsx'

function App () {
  return (
    <div className='App'>
      <Navegador />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/producto/:id' element={<Producto />} />
        <Route path='/productos' element={<All />} />
        <Route path='/favoritos' element={<Favoritos />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
