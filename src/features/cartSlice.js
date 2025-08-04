import { createSlice } from '@reduxjs/toolkit';

const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: savedCart,
    },
    reducers: {
        addToCart: (state, action) => {
            const exists = state.items.find(item => item.id === action.payload.id);
            if (exists) {
                exists.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
