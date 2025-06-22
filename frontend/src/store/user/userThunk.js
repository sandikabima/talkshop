import UserService from "@/services/userService";
import { handleError } from "@/shared/lib/handle-error";
import { handleToast } from "@/shared/lib/handle-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAllUser = createAsyncThunk(
    "user/fetchAllUser",

    async (params, thunkAPI) => {
        try {
            return await UserService.getAll(params)
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error));
        }
    }
)

export const deleteUser = createAsyncThunk(
    "user/deleteUser",

    async (id, thunkAPI) => {
        try {
            return await UserService.delete(id)
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }
)

export const postUser = createAsyncThunk(
    "user/postUser",

    async (data, thunkAPI) => {
        try {
            return await UserService.add(data)
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }
)

export const fetchUserById = createAsyncThunk(
    "user/fetchUserById",

    async (id, thunkAPI) => {
        try {
            return await UserService.getById(id)
        } catch (error) {
            handleToast.error(handleError(error));
            return thunkAPI.rejectWithValue(handleError(error));
        }
    }
)

export const updateUser = createAsyncThunk(
    "user/updateUser",

    async ({ id, data }, thunkAPI) => {
        try {
            return await UserService.update(id, data)
        } catch (error) {
            handleToast.error(handleError(error))
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }
)

