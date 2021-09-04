import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM" && action.payload) {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const handleAddItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };

  const handleRemoveItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", payload: id });
  };

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
