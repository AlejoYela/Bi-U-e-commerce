import './App.css';
import Landing from './components/Landing.jsx';
import { Routes, Route } from 'react-router-dom'
import Navegador from './components/Navegador.jsx';
import Footer from './components/Footer.jsx';
import Producto from './components/Producto.jsx';
import All from './components/All.jsx';
import { Button } from 'react-bootstrap'


function App() {

  return (
    <div className="App">
      <Navegador />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/producto/:product_type/:id' element={<Producto />} />
        <Route path='/productos' element={<All />} />
      </Routes>
      <Button className='fixed-bottom border-0 bg-transparent' style={{ width: 'fit-content', marginLeft: '95.4%', marginBottom: '0%' }}>
        <img src='/icons/wpp-dark.svg' alt="Carrito" width={50} />
      </Button>


      <Footer />

    </div>
  );
}

export default App;
