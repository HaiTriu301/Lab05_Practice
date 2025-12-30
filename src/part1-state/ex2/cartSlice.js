import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const item = action.payload;
            const existingItem = state.items.find(
                (i) => i.id === item.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }

            state.totalAmount += item.price;
        },

        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(
                (i) => i.id === id
            );

            if (!existingItem) return;

            existingItem.quantity -= 1;
            state.totalAmount -= existingItem.price;

            if (existingItem.quantity === 0) {
                state.items = state.items.filter((i) => i.id !== id);
            }
        },

        clearCart(state) {
            state.items = [];
            state.totalAmount = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

/**
 * MEMOIZED SELECTOR
 * Tính thuế 10%, chỉ chạy lại khi totalAmount thay đổi
 */
export const selectCartTax = createSelector(
    (state) => state.cart.totalAmount,
    (totalAmount) => totalAmount * 0.1
);
