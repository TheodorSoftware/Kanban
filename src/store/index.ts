import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from './boardsSlice';
import { tasksSlice } from "./tasksSlice";

const store = configureStore({
    reducer: { 
        boardSlice: boardSlice.reducer,
        tasksSlice: tasksSlice.reducer
    },
})

export default store;