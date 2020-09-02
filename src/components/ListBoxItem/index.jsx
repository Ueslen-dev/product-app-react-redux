import React from 'react'

import { Listboxitem } from './styles'

function ListBoxItem({ name, price, amount, code, description }){
    
    return(
        <Listboxitem>
            <h3>{name}</h3>
            <h4>R$ {price}</h4>
            <p><strong>disponível: </strong>{amount}</p>
            <p><strong>código: </strong>{code}</p>
            <p>{description}</p>
         </Listboxitem>
    )

}


export default ListBoxItem