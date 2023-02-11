import { configureStore } from '@reduxjs/toolkit'
import {apartmentReducer} from "./slices/apartment.js"

export const store = configureStore({
    reducer: {
        apartment: apartmentReducer,
    }
})