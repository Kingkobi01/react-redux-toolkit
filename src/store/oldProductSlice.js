import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: ''
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductSuccess(state, action) {
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data
            }
        },
        fetchProductFailure(state, action) {
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.payload.data
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(collectProductsFromAPI.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(collectProductsFromAPI.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'success'
            })
            .addCase(collectProductsFromAPI.rejected, (state, action) => {
                state.status = 'failed'
            })
    }
})


export const collectProductsFromAPI = createAsyncThunk('products/get', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
})

export function getProducts() {
    return async function getProductsThunk(dispatch, getState) {
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = {
                isLoading: false,
                data: await res.json()
            }
            dispatch(fetchProductSuccess(data))

        } catch (error) {
            dispatch(fetchProductFailure({
                isLoading: false,
                data: "Something went wrong, dude."
            }))
        }
    }
}

export default productSlice.reducer
export const { fetchProductFailure, fetchProductSuccess } = productSlice.actions 
