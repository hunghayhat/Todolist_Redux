import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlide'

export default configureStore({
    reducer: {
        todo: todoReducer,
    }
})