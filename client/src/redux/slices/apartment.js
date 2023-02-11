import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from '../../axios/axios.js'

export const getAllApartments = createAsyncThunk('apartment/getAllApartments', async (query) => {
    const {data} = await axios.get(`/apartments?price=${query?.price}&rooms=${query?.rooms}`)
    return data
})

export const getOneApartment = createAsyncThunk('apartment/getOneApartment', async (params) => {
    const {data} = await axios.get(`/apartments/${params.id}`)
    return data
})

export const createApartment = createAsyncThunk('apartment/createApartment', async (params) => {
    const {data} = await axios.post('/apartments', params)
    return data
})

export const updateApartment = createAsyncThunk('apartment/updateApartment', async (params) => {
    const {data} = await axios.put(`/apartments/${params.id}`, params)
    return data
})

export const deleteApartment = createAsyncThunk('apartment/deleteApartment', async (params) => {
    const {data} = await axios.delete(`/apartments/${params.id}`)
    return data
})

const initialState = {
    data: [],
    status: 'loading',
}

const apartmentSlice = createSlice({
    name: 'apartment',
    initialState,
    extraReducers: {
        [getAllApartments.pending]: (state) => {
            state.status = 'loading'
            state.data = []
        },
        [getAllApartments.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [getAllApartments.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },

        [getOneApartment.pending]: (state) => {
            state.status = 'loading'
            state.data = []
        },
        [getOneApartment.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [getOneApartment.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },

        [createApartment.pending]: (state) => {
            state.status = 'loading'
            state.data = []
        },
        [createApartment.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [createApartment.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },

        [updateApartment.pending]: (state) => {
            state.status = 'loading'
            state.data = []
        },
        [updateApartment.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [updateApartment.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },

        [deleteApartment.pending]: (state) => {
            state.status = 'loading'
            state.data = []
        },
        [deleteApartment.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [deleteApartment.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
    }
})

export const apartmentState = state => state.apartment.data
export const apartmentReducer = apartmentSlice.reducer