import "./App.css";
import Product from "./components/product";
import Basket from "./components/basket";
import UrunEkle from "./components/urun_ekle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/urun_ekle" element={<UrunEkle />}></Route>
      </Routes>
    </div>
  );
}

export default App;
