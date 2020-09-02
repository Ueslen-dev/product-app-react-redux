import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import Container from '../../components/Container'
import ListBoxItem from '../../components/ListBoxItem'
import HeaderApp from '../../components/HeaderApp'

import { getAllProducts } from '../../store/fetchActions'

import { Listbg, Listcontent } from './styles'

function List(){

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    
    return(
        <Listbg>
            <Container>
                <HeaderApp />
                <Listcontent>
                    {products.map((product, index) => 
                        <ListBoxItem
                        key={index}
                        name={product.name}
                        price={product.price}
                        amount={product.amount}
                        code={product.code}
                        description={product.description}
                        />
                    )}
                    
                    
                </Listcontent>
            </Container>
        </Listbg>
    )
}

export default List