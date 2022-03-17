import { configureStore } from "@reduxjs/toolkit";
import  appReducer from '../feature/appSlice';

export default configureStore({
    reducer: {
        app: appReducer,
    }
})