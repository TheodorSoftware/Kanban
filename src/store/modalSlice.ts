import { createSlice } from "@reduxjs/toolkit";

interface ModalSlice{
    openAddNewTask: boolean;
    editBoard: {
        openBoardModal: boolean;
        boardId: string;
    }
    openAddColumnBoard: boolean;
};

const initialState: ModalSlice = {
    openAddNewTask: false,
    editBoard: {
        openBoardModal: false,
        boardId: ''
    },
    openAddColumnBoard: false
};

export const modalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        openAddNewTaskModal: (state) => {
            return{
                ...state,
                openAddNewTask: true
            }
        },
        closeAddNewTaskModal: (state) => {
            return{
                ...state,
                openAddNewTask: false
            }
        },
        openBoardModal: (state, action) => {
            return {
                ...state,
                editBoard: {
                    openBoardModal: true,
                    boardId: action.payload
                }
            }
        },
        closeBoardModal: (state) => {
            return{
                ...state,
                editBoard: {
                    openBoardModal: false,
                    boardId: ''
                }
            }
        },
        openAddColumnModal: (state)=> {
            return {
                ...state,
                openAddColumnBoard: true
            }
        },
        closeAddColumnModal: (state) => {
            return{
                ...state,
                openAddColumnBoard: false
            }
        }
    }
});

export default modalSlice.reducer;
export let actionModalSlice =  modalSlice.actions;

export const selectOpenAddNewTaskModalFlag = state => state.modalSlice.openAddNewTask;
export const selectOpenBoardModalFlag = state => state.modalSlice.editBoard.openBoardModal;
export const selectBoardId = state => state.modalSlice.editBoard.boardId;
export const selectOpenAddNewColumnModalFlag = state => state.modalSlice.openAddColumnBoard;