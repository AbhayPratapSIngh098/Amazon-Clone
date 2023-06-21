import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        productNumber: 0
    },
    reducers: {
        addToCart: (state,action)=>{
            //check if in product array
            const addProductExists = state.products.find((product)=> product.id === action.payload.id);
            if (addProductExists){
                addProductExists.quantity += parseInt(action.payload.quantity);
                
            }else{
                state.products.push({...action.payload, quantity: parseInt(action.payload.quantity)})
            }
            state.productNumber = state.productNumber + parseInt(action.payload.quantity);
        },
        removeFromCart: (state, action)=>{
            //find the product removing 
            const productToRemove = state.products.find((product)=> product.id === action.payload);

            state.productNumber = state.productNumber - productToRemove.quantity;

            const index = state.products.findIndex((product)=>product.id ===action.payload)

            state.products.splice(index,1);
        }
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
