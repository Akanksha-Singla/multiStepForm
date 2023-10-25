import { createSlice } from "@reduxjs/toolkit"
// import { IAddOn , ISelect } from "../types/personalInfo.types"


const initialState :any = []
   

const cartSlice = createSlice({
    name :"cart",
    initialState,

    reducers : {
add(state,action){
const cartItems = action.payload 
console.log("cartItems",cartItems)
state.push(action.payload)
// state.totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)
},


    }
})

export const {add} = cartSlice.actions;
export default cartSlice.reducer;

// interface IInitialStateCart {
// totalCartItems : IAddOn[] & ISelect[],
// // totalPrice : number
// }
