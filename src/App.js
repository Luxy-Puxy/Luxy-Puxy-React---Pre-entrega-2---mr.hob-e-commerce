import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from "./components/pages/Home"
import Cart from "./components/pages/Cart"
import MyAccount from "./components/pages/MyAccount"
import TCG from "./components/pages/TCG"
import BoardGames from "./components/pages/BoardGames"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
