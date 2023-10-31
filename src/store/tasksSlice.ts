import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../interfaces/status.enum";
import Task from "../interfaces/task.interface";
import axios, { AxiosResponse } from "axios";

interface TasksSlice{
    tasks: {
        taskData: Task[],
        status: Status,
        error: string;
    }
};

const initialState = {
    tasks: {
        taskData: [] as Task[],
        status: Status.PENDING as Status,
        error: ''
    }
};

export const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {},
    extraReducers(builder: ActionReducerMapBuilder<TasksSlice>){
        builder.addCase(fetchTasksData.pending, (state) => {
            state.tasks.taskData = [],
            state.tasks.error = '',
            state.tasks.status = Status.PENDING
        }).addCase(fetchTasksData.rejected, (state, action) => {
            state.tasks.taskData = [],
            state.tasks.error = action.error.message as string,
            state.tasks.status = Status.FAILED
        }).addCase(fetchTasksData.fulfilled, (state,action) => {
            state.tasks.taskData = action.payload,
            state.tasks.error = '',
            state.tasks.status = Status.SUCCESS
        })
    }
});

export const fetchTasksData = createAsyncThunk('tasksSlice/fetchTasksData', async (name: string) => {
    const response: AxiosResponse<Task[]> = await axios.get(`http://localhost:3000/tasks/${name}`)
    return response.data;
});

export default tasksSlice.reducer;
export const tasksSliceActions = tasksSlice.actions;

export const selectTasksData = state => state.tasksSlice.tasks.taskData;
export const selectTasksStatus = state => state.tasksSlice.tasks.status;
export const selectTasksError = state => state.tasksSlice.tasks.error;