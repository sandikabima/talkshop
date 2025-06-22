import StockService from "@/services/stockService";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAllStock = createAsyncThunk(
    "stock/fetchAllStock",

    async (params, thunkAPI) => {
        try {
            return await StockService.getAll(params)
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error));
        }
    }
)

export const deleteStock = createAsyncThunk(
    "stock/deleteStock",

    async (id, thunkAPI) => {
        try {
            return await StockService.delete(id)
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }
)


export const postStock = createAsyncThunk(
    "stock/postStock",

    async (data, thunkAPI) => {
        try {
            // return await ProductService.add(data)
            const { product } = thunkAPI.getState();
            const response = await StockService.add(data)

            return {
                data: response.data,
                product: product.data
            }
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }
)