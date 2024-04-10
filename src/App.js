import './App.css';
import Landing from './components/Landing.jsx';
import { Routes, Route } from 'react-router-dom'
import Navegador from './components/Navegador.jsx';
import Footer from './components/Footer.jsx';
import Producto from './components/Producto.jsx';


function App() {

  return (
    <div className="App">
      <Navegador />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/producto/:product_type/:id' element={<Producto />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
