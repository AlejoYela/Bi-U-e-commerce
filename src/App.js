import './App.css';
import Landing from './components/Landing.jsx';
import { Routes, Route } from 'react-router-dom'
import Navegador from './components/Navegador.jsx';
import Footer from './components/Footer.jsx';
import Producto from './components/Producto.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [productosFav, setProductosFav] = useState([]);

  useEffect(() => {
    axios(`http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.8`).then(({ data }) => {
      setProductosFav(data);
    }).catch((error) => {
      console.error(error)
    });
  }, []);

  return (
    <div className="App">
      <Navegador />
      <Routes>
        <Route path='/' element={<Landing productos={productosFav} />} />
        <Route path='/producto/:id' element={<Producto />} productos={productosFav}/>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
