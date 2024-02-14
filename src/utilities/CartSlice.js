import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        AddItem : (state,action) => {
            state.items.push(action.payload)

        },
        removeItem : (state,action) => {
            state.items.pop()

        },
        removeAll : (state,action) => {
            state.items.items.length = 0;

        },
    }
});
export const{ AddItem,removeItem,removeAll } = Cartslice.actions;
export default Cartslice.reducer;