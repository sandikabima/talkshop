import ProductService from "@/services/productService";
import { handleError } from "@/shared/lib/handle-error";
import { handleToast } from "@/shared/lib/handle-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProduct = createAsyncThunk(
    "product/fetchAllProduct",

    async (params, thunkAPI) => {
        try {
            return await ProductService.getAll(params)
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error));
        }
    }
)

export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",

    async (id, thunkAPI) => {
        try {
            return await ProductService.delete(id)
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }
)

export const postProduct = createAsyncThunk(
    "product/postProduct",

    async (data, thunkAPI) => {
        try {
            // return await ProductService.add(data)
            const { categories } = thunkAPI.getState();
            const response = await ProductService.add(data)

            return {
                data: response.data,
                categories: categories.data
            }
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }
)
