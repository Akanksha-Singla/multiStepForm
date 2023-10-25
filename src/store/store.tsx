import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
const store = configureStore ({
    reducer :{
        cart : cartReducer,//that came from that cart slice ok 
    }
})

export default store;