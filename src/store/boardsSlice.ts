import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from '../interfaces/status.enum';
import axios, { AxiosResponse } from 'axios';
import { Board } from '../interfaces/boards.interface';

interface BoardSlice{
    boards:{
        boardsData: Board[];
        status: Status;
        error: string;
    }
}

const initialState = {
    boards: {
        boardsData: [] as Board[],
        status: Status.PENDING as Status,
        error: ''
    }
};

export const boardSlice = createSlice({
    name: "boardSlice",
    initialState,
    reducers:{},
    extraReducers(builder: ActionReducerMapBuilder<BoardSlice>){
        builder.addCase(fetchBoardData.pending, (state) => {
            state.boards.boardsData = [],
            state.boards.status = Status.PENDING,
            state.boards.error = ''
        }).addCase(fetchBoardData.rejected, (state, action) => {
            state.boards.boardsData = [],
            state.boards.error = action.error.message as string,
            state.boards.status = Status.FAILED
        }).addCase(fetchBoardData.fulfilled , (state, action) => {
            state.boards.boardsData = action.payload,
            state.boards.status = Status.SUCCESS,
            state.boards.error = ''
        })
    } 
});

export const fetchBoardData = createAsyncThunk('boardSlice/fetchBoardData', async () => {
    const response: AxiosResponse<Board[]> = await axios.get('http://localhost:3000/boards');
    return response.data;
});

export default boardSlice.reducer;
export const boardSliceActions = boardSlice.actions;

export const selectBoardData = state => state.boardSlice.boards.boardsData;
export const selectBoardStatus = state => state.boardSlice.boards.status;
export const selectBoardError = state => state.boardsSlice.boards.error;
