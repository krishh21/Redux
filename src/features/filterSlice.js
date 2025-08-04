import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        category: 'All',
        price: 150, // max price range
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
    },
});

export const { setCategory, setPrice } = filterSlice.actions;
export default filterSlice.reducer;
