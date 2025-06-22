import { createSlice } from "@reduxjs/toolkit";
import { deleteStock, fetchAllStock, postStock } from "./stockThunk";


const initialState = {
    data: [],
    loading: false,
    error: null,
    pagination: []
};

const stockSlice = createSlice({
    name: "stock",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllStock.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchAllStock.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
                state.pagination = action.payload.pagination
            })
            .addCase(fetchAllStock.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(deleteStock.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(deleteStock.fulfilled, (state, action) => {
                state.loading = false;
                const currentId = action.meta.arg;
                console.log(action)
                state.data = state.data.filter((stock) => stock.productStockId !== currentId);
            })
            .addCase(deleteStock.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(postStock.pending, (state) => {
                state.loading = true
                state.error = null
                if (state.data.length > 4) {
                    state.data.pop()
                }
            })
            .addCase(postStock.fulfilled, (state, action) => {
                state.loading = false;

                const productId = action.payload.data.productId;
                const product = action.payload.product.find(cat => cat.productId === productId);

                const newProduct = {
                    ...action.payload.data,
                    Product: {
                        name: product?.name || "Unknown"
                    }
                };
                state.data.unshift(newProduct);
            })
            .addCase(postStock.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default stockSlice.reducer