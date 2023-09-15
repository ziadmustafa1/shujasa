import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header2 from "./Components/Header2";
import Headers from "./Components/Headers";
import CardDetails from "./Components/CardDetails";
import HomePage from "./Components/HomePage";
import RefundExchangePolicy from "./Components/RefundExchangePolicy";
import Login from "./Components/auth/Login";
import Mists from "./Components/Shuja-Hair-Mists";
import Shuja from "./Components/Shuja";
import Cart from "./Components/Cart";
import { CartProvider } from "./Components/context/ShoppingCartContext";
function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <Headers/>
      <Header2 />
      <Routes>
      <Route index element={<HomePage />} />     
      <Route path="product-details/:productId" element={<CardDetails />} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/refundexchangepolicy' element={<RefundExchangePolicy/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/shuja-hair-mists' element={<Mists/>} />
      <Route path='/shuja-collection' element={<Shuja/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
