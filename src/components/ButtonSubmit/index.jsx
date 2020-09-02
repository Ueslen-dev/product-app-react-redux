import React from 'react'

import { Button } from './styles'

function ButtonSubmit({ name }){
    return(
        <Button type="submit">{name}</Button>
    )
}

export default ButtonSubmit