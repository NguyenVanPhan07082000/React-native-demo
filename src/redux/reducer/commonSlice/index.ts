import { createSlice } from '@reduxjs/toolkit';
import { commonInterface } from './interface';

// Define a type for the slice state

// Define the initial state using that type
const initialState: commonInterface = {
    token: null,
    currentUserOnline: null,
    userList: [],
    workspace: null,
};

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setInitDataUser(state, action) {
            const { token, user, userList, workspace } = action.payload;
            state.token = token;
            state.currentUserOnline = user;
            state.userList = userList;
            state.workspace = workspace;
        },
        updateWorkspace(state, action) {
            const { workspace } = action.payload;
            state.workspace = workspace;
        },
        clearInitData(state) {
            state.token = null;
            state.currentUserOnline = null;
            state.userList = [];
            state.workspace = null;
        },
    },
});

export const { setInitDataUser, clearInitData, updateWorkspace } = commonSlice.actions;

export default commonSlice.reducer;
