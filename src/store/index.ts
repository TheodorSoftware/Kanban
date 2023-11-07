import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from './boardsSlice';
import { tasksSlice } from "./tasksSlice";
import { modalSlice } from "./modalSlice";

const store = configureStore({
    reducer: { 
        boardSlice: boardSlice.reducer,
        tasksSlice: tasksSlice.reducer,
        modalSlice: modalSlice.reducer
    },
})

export default store;