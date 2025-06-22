import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct, fetchAllProduct, postProduct } from "./productThunk";

const initialState = {
	data: [],
	loading: false,
	error: null,
	pagination: [],
}

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllProduct.pending, (state) => {
				state.loading = true;
				state.error = null
			})
			.addCase(fetchAllProduct.fulfilled, (state, action) => {
				state.loading = false
				state.data = action.payload.data
				state.pagination = action.payload.pagination
			})
			.addCase(fetchAllProduct.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
			.addCase(deleteProduct.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.loading = false;
				const currentId = action.meta.arg;
				state.data = state.data.filter((product) => product.productId !== currentId);
			})
			.addCase(deleteProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(postProduct.pending, (state) => {
				state.loading = true;
				state.error = null;
				if (state.data.length > 4) {
					state.data.pop();
				}
			})
			.addCase(postProduct.fulfilled, (state, action) => {
				state.loading = false;

				const categoryId = action.payload.data.categoryId;
				const category = action.payload.categories.find(cat => cat.categoryId === categoryId);

				const newProduct = {
					...action.payload.data,
					Category: {
						name: category?.name || "Unknown"
					}
				};
				state.data.unshift(newProduct);

			})
			.addCase(postProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
	}
})

export default productSlice.reducer