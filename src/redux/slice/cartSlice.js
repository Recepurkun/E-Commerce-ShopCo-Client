import { createSlice } from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";

const getCartItemsFromStorage = () => {
    if (!isBrowser) return [];
    const existingCart = localStorage.getItem('cart');
    return existingCart ? JSON.parse(existingCart) : [];
};

const saveCartItemsToStorage = (cart) => {
    if (!isBrowser) return;
    localStorage.setItem("cart", JSON.stringify(cart));
};

const cartInitialState = {
    cartItems: getCartItemsFromStorage(),
};

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            saveCartItemsToStorage(state.cartItems);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.cartId !== action.payload
            );
            saveCartItemsToStorage(state.cartItems);
        },
        clearCart: (state) => {
            state.cartItems = [];
            saveCartItemsToStorage(state.cartItems);
        },
        updateCartItem: (state, action) => {
            const { id, newQuantity } = action.payload;
            const itemIndex = state.cartItems.findIndex(item => item.cartId === id);
            if (itemIndex !== -1) {
                state.cartItems[itemIndex].total = newQuantity;
                saveCartItemsToStorage(state.cartItems);
            }
        }
    },
});

export const { addToCart, removeFromCart, clearCart, updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;
