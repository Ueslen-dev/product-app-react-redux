import React from 'react'

import Container from '../Container'
import { useSelector } from 'react-redux'

import { Alert } from './styles'

function AlertMsg(props){

    const isShow = useSelector((state) => state.layout.showMessage)
    return(
        <>
            {isShow && (
                <Container>
                    <Alert errorType={props.type}>
                        <p>{props.name}</p>
                    </Alert>
                </Container>
            )}
        </>
    )
}

export default AlertMsg