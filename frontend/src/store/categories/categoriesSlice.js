import { createSlice } from "@reduxjs/toolkit";
import { deleteCategories, fetchAllCategories, postCategories, updateCategory } from "./categoriesThunk";

const initialState = {
	data: [],
	loading: false,
	error: null,
	pagination: []
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllCategories.pending, (state) => {
				state.loading = true;
				state.error = null
			})
			.addCase(fetchAllCategories.fulfilled, (state, action) => {
				state.loading = false
				state.data = action.payload.data
				state.pagination = action.payload.pagination
			})
			.addCase(fetchAllCategories.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
			.addCase(deleteCategories.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(deleteCategories.fulfilled, (state, action) => {
				state.loading = false;
				const currentId = action.meta.arg;
				state.data = state.data.filter((categories) => categories.categoryId !== currentId);
			})
			.addCase(deleteCategories.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(postCategories.pending, (state) => {
				state.loading = true
				state.error = null
				if (state.data.length > 4) {
					state.data.pop()
				}
			})
			.addCase(postCategories.fulfilled, (state, action) => {
				state.loading = false
				state.data.unshift(action.payload.data)
			})
			.addCase(postCategories.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(updateCategory.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(updateCategory.fulfilled, (state, action) => {
				state.loading = false
				const updateCategory = action.payload.data
				const index = state.data.findIndex(
					(item) => item.categoryId === updateCategory.categoryId
				)
				if (index !== -1) {
					state.data[index] = updateCategory
				}
			})
			.addCase(updateCategory.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	}
})

export default categoriesSlice.reducer