import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Catalogo from "./components/Catalogo";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartView from "./components/CartView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Catalogo />
              </>
            }
          />
          <Route path="/catalogo" element={<Catalogo></Catalogo>}></Route>
          <Route path="/categoria/:categoryId" element={<Catalogo />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
