import { createSlice } from "@reduxjs/toolkit";
import { deleteUser, fetchAllUser, postUser, updateUser } from "./userThunk";


const initialState = {
    data: [],
    loading: false,
    error: null,
    pagination: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUser.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchAllUser.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
                state.pagination = action.payload.pagination
            })
            .addCase(fetchAllUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(postUser.pending, (state) => {
                state.loading = true
                state.error = null
                if (state.data.length > 4) {
                    state.data.pop()
                }
            })
            .addCase(postUser.fulfilled, (state, action) => {
                state.loading = false
                state.data.unshift(action.payload.data)
            })
            .addCase(postUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                const currentId = action.meta.arg;
                state.data = state.data.filter((user) => user.userId !== currentId);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false
                const updateUser = action.payload.data
                const index = state.data.findIndex(
                    (item) => item.userId === updateUser.userId
                )
                if (index !== -1) {
                    state.data[index] = updateUser
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default userSlice.reducer