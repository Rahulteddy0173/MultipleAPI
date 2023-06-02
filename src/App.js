
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Crypto from './Components/Crypto';
import Product from './Components/Product';
import Nav from './Components/Nav';
import Covidd from './Components/Covidd';


function App() {  

  return (
    <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/crypto' element={<Crypto/>} />
          <Route path='/products' element={<Product/>} />
          <Route path='/covid' element={<Covidd/>} />
        </Routes>
    
    </div>
  );
}

export default App;
