import { createSlice } from '@reduxjs/toolkit';

export const LoadingSlice = createSlice({
    name: 'loadingState',
    initialState: {
        value: true,
    },
    reducers: {
        setLoading: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { setLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;