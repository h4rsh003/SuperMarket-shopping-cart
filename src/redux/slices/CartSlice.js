import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
            // Save updated state to local storage
            localStorage.setItem("cart", JSON.stringify(state));
        },
        remove: (state, action) => {
            // Filter the item
            const newState = state.filter((item) => item.id !== action.payload);
            // Update local storage
            localStorage.setItem("cart", JSON.stringify(newState));
            return newState;
        },
        setCart: (state, action) => {
            return action.payload;
        }
    },
});

export const { add, remove, setCart } = CartSlice.actions;
export default CartSlice.reducer;