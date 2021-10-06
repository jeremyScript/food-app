import { useReducer } from "react";

import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const { id, name, price, quantity } = action.payload;

    const existingItemIndex = state.items.findIndex((item) => item.id === id);
    const existingItem = state.items[existingItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, { id, name, price, quantity }];
    }

    const updatedTotalQuantity = state.totalQuantity + quantity;
    const updatedTotalAmount = state.totalAmount + price * quantity;

    return {
      items: updatedItems,
      totalQuantity: updatedTotalQuantity,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const id = action.payload;

    const existingItemIndex = state.items.findIndex((item) => item.id === id);
    const existingItemQuantity = state.items[existingItemIndex].quantity;
    const existingItemPrice = state.items[existingItemIndex].price;

    let totalQuantity = state.totalQuantity - 1;
    let totalAmount = state.totalAmount - existingItemPrice;

    let updatedItems;

    if (existingItemQuantity === 1) {
      updatedItems = [...state.items.filter((item) => item.id !== id)];
    } else {
      updatedItems = [...state.items];
      updatedItems[existingItemIndex].quantity--;
    }

    return {
      items: updatedItems,
      totalQuantity: totalQuantity,
      totalAmount: totalAmount,
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
    items: cartState.items,
    totalQuantity: cartState.totalQuantity,
    totalAmount: cartState.totalAmount,
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
