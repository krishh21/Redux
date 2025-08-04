import { createSlice } from '@reduxjs/toolkit';
import data from '../assets/products.json';

const initialState = {
    items: data,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
});

export default productSlice.reducer;
