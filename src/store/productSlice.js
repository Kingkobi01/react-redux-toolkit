import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { statusCode } from "../utils/statusCode";

const initialState = {
    data: [],
    status: statusCode.LOADING
}

export const collectProductsFromAPI = createAsyncThunk('products/get', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    return res.json()
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(collectProductsFromAPI.pending, (state, action) => {
                state.status = statusCode.LOADING
            })
            .addCase(collectProductsFromAPI.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = statusCode.SUCCESS
            })
            .addCase(collectProductsFromAPI.rejected, (state, action) => {
                state.status = statusCode.ERROR
            })
    }
})

export default productSlice.reducer
