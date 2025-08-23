import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: null,
        password: null,
        isLoggedIn: false,
        cart: [],
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.username = null;
            state.password = null;
            state.isLoggedIn = false;
            state.cart = [];
        },
        addToCart: (state, action) => {
            const item = action.payload; 
            const existing = state.cart.find((p) => p.id === item.id);
            if (existing) {
                existing.qty += 1;
            } else {
                state.cart.push({ ...item, qty: 1 });
            }
        },
    },
});

export const { login, logout, addToCart } = userSlice.actions;
export default userSlice.reducer;
