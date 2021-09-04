import CartContext from "./cart-context";

const CartProvider = (props) => {
  const handleAddItemToCart = (item) => {};
  const handleRemoveItemFromCart = (id) => {};

  const cartContext = {
    items: [{ quantity: 1 }, { quantity: 2 }],
    totalAmount: 0,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
