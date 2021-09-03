import { useState } from "react";

import Menu from "./components/Food/Menu";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = (event) => {
    setShowCart(true);
  };

  return (
    <>
      <Header onShowCart={handleShowCart} />
      <Menu />
      {showCart && <Cart />}
    </>
  );
}

export default App;
