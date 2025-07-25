const { configureStore } = require("@reduxjs/toolkit");
import productsSlice from "../features/products/productsSlice"

const store = configureStore({
    reducer : {
        NoorShop : productsSlice 
    }
})
export default store ;