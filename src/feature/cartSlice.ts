import { PayloadAction, createSlice, } from "@reduxjs/toolkit"

export interface cartState {
    value: string[],
}


const initialState: cartState = {
    value : [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>)=>{
            state.value.push(action.payload)
        },
        checkOut: (state) =>{
            state.value = []
        }
    }
});

export const { addItem, checkOut } = cartSlice.actions;
export default cartSlice.reducer;