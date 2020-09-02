import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import logoutService from '../../services/logout.service'

import {  Header, Navigator } from './styles'

function HeaderApp(){

    const { isAuthenticate } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    function logoutButton(){
        isAuthenticate && dispatch(logoutService())
    }

    return(
        <Header>
            <span>Oi, Usuário</span>
            <Navigator>
                <Link to="/cadastro">cadastro</Link>
                <Link to="/catalogo">catálogo</Link>
                <Link onClick={logoutButton}>sair</Link>
            </Navigator>
        </Header>
    )
}

export default HeaderApp