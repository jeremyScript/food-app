import { useState } from "react";

import Menu from "./components/Food/Menu";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartOpen = (event) => {
    setShowCart(true);
  };

  const handleCartClose = (event) => {
    setShowCart(false);
  };

  return (
    <>
      <Header onCartOpen={handleCartOpen} />
      <Menu />
      {showCart && <Cart onCartClose={handleCartClose} />}
    </>
  );
}

export default App;
