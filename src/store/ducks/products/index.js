import {createAction, createReducer} from '@reduxjs/toolkit'

const INITIAL_STATE = []

export const addProduct = createAction('ADD_PRODUCT')
export const addAllProducts = createAction('ADD_ALL_PRODUCTS')

export default createReducer(INITIAL_STATE, {
    [addProduct.type]: (state, action) => [...state, action.payload],
    [addAllProducts.type]: (state, action) => [ ...action.payload]
})
