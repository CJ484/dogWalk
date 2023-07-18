import { createSlice } from "@reduxjs/toolkit";

const DogResults = createSlice({
    name: "dogResults",
    initialState: {
        dogPen: [],
        results: [],
    },
    reducers: {
        setDataDog: (state, action) => {
            state.results = action.payload;
        },
        addToDogPen: (state, action) => {
            state.dogPen.push(action.payload);
        },
        removeFromDogPen: (state, action) => {
            state.dogPen = state.dogPen.filter((index) => index !== action.payload)
        }
    }
})

export const { setDataDog, addToDogPen, removeFromDogPen } = DogResults.actions;

export default DogResults.reducer;
