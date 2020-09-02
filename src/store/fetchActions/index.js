import api from '../../services/api'
import { addAllProducts, addProduct } from '../ducks/products'
import { login } from '../ducks/auth'
import logoutService from '../../services/logout.service'

export const getAllProducts = () => {
    return (dispatch) => {

        api.get('/product', {
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            dispatch(addAllProducts(res.data))
        })
        .catch((err) => { 
            if(err.response)
                if(err.response.status === 401)
                    dispatch(logoutService())
        })
    }
}

export const registerProduct = (product) => {
    return (dispatch) => {
        api.post('/product', product, {
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                dispatch(addProduct(res.data))
            })
            .catch((err) => {
                if(err.response)
                    if(err.response.status === 401)
                        dispatch(logoutService())
            })
    }
}

export const authLogin = (user) => {
    return (dispatch) => {
        api.post('/auth', user)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                dispatch(login())

                window.location.pathname = '/catalogo'
            })
            .catch((err) => { console.log(err) })
    }
}

