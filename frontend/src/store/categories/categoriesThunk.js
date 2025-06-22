import CategoriesService from "@/services/categoriesService";
import { handleError } from "@/shared/lib/handle-error";
import { handleToast } from "@/shared/lib/handle-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAllCategories = createAsyncThunk(
    "categories/fetchAllCategories",

    async (params, thunkAPI) => {
        try {
            return await CategoriesService.getAll(params)
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error));
        }
    }
)

export const deleteCategories = createAsyncThunk(
    "categories/deleteCategories",

    async (id, thunkAPI) => {
        try {
            return await CategoriesService.delete(id)
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }
)

export const postCategories = createAsyncThunk(
    "categories/postCategories",

    async (data, thunkAPI) => {
        try {
            return await CategoriesService.add(data)
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }
)

export const fetchCategoryById = createAsyncThunk(
    "categories/fetchCategoryById",

    async (id, thunkAPI) => {
        try {
            return await CategoriesService.getById(id)
        } catch (error) {
            handleToast.error(handleError(error));
            return thunkAPI.rejectWithValue(handleError(error));
        }
    }
)

export const updateCategory = createAsyncThunk(
    "categories/updateCategory",

    async ({ id, data }, thunkAPI) => {
        try {
            return await CategoriesService.update(id, data)
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }
)