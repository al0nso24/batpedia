import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Inicio from './Inicio';
import Footer from './Footer';
import Origen from './Origen';
import Villanos from './Villanos';
import Villanos2 from './Villanos2';
import Gadgets from './Gadgets';
import Habilidades from './Habilidades';
import Trajes from './Trajes';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Inicio></Inicio>}></Route>
      <Route path='/origen' element={<Origen></Origen>}></Route>
      <Route path='/villanos' element={<Villanos></Villanos>}></Route>
      <Route path='/villanos/2' element={<Villanos2></Villanos2>}></Route>
      <Route path='/gadgets' element={<Gadgets></Gadgets>}></Route>
      <Route path='/habilidades' element={<Habilidades></Habilidades>}></Route>
      <Route path='/trajes' element={<Trajes></Trajes>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
