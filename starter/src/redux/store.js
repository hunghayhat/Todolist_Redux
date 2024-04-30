import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlide';

export default configureStore({
    reducer: {
        todos: todoReducer,
    }
})