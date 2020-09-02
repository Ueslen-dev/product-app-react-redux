import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './ducks/products'
import layoutReducer from './ducks/layout'
import authReducer from './ducks/auth'

export default configureStore({
    reducer: {
        products: productsReducer,
        layout: layoutReducer,
        auth: authReducer
    }
})
