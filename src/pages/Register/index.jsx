import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import Container from '../../components/Container'
import HeaderApp from '../../components/HeaderApp'
import FileImage from '../../assets/img/file.jpg'
import ButtonSubmit from '../../components/ButtonSubmit'
import Alert from '../../components/AlertMsg'

import { registerProduct } from '../../store/fetchActions'
import { showMessage, hideMessage } from '../../store/ducks/layout'

import { Registerbg, Registerbox, Registerform, Registerforminput, Registerformimg } from './styles'

function Register(){

    const [product, setProduct] = useState({
        name: '',
        price: '',
        amount: '',
        code: '',
        description: ''
    })

    const dispatch = useDispatch()

    function handleForm(e){
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    function submitForm(e){
        e.preventDefault()

        dispatch(registerProduct(product))
        setProduct({
            name: '',
            price: '',
            amount: '',
            code: '',
            description: ''
        })
        dispatch(showMessage())
        setTimeout(() => { dispatch(hideMessage()) }, 2500)
    }

    return(
        <Registerbg>
            <Alert type={false} name="Cadastrado com sucesso!"/>
            <Container>
                <HeaderApp />
                <Registerbox>
                    <Registerform onSubmit={submitForm} method="POST">
                      <Registerforminput>
                        <p>Novo produto</p>
                            <div>
                                <input onChange={handleForm} name="name" type="text" placeholder="nome do produto" value={product.name}></input>
                                <input onChange={handleForm} name="price" type="text" placeholder="preço" value={product.price}></input>
                            </div> 
                            <div className="inputNotPlaceholder">
                                <span>código de barras</span>
                                <input onChange={handleForm} name="code" type="text" value={product.code}/>
                            </div>
                            <div className="inputNotPlaceholder" id="inputAmount">
                                <span>quantidade em estoque</span>
                                <input onChange={handleForm} name="amount" type="number" value={product.amount}/>
                            </div>
                            <div>
                                <input onChange={handleForm} name="description" type="text" placeholder="descrição" value={product.description}></input>  
                            </div>
                      </Registerforminput>
                      <Registerformimg>
                          <img src={FileImage} alt="file"/>
                          <ButtonSubmit name="salvar" />
                      </Registerformimg>
                    </Registerform>
                </Registerbox>
            </Container>
        </Registerbg>
        
    )
}


export default Register