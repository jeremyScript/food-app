import { useState } from "react";

import Menu from "./components/Food/Menu";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = (event) => {
    setShowCart(true);
  };

  const handleHideCart = (event) => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={handleShowCart} />
      <Menu />
      {showCart && <Cart onHideCart={handleHideCart} />}
    </CartProvider>
  );
}

export default App;
