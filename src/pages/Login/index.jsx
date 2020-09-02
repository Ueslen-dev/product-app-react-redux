import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import Container from '../../components/Container'
import ButtonSubmit from '../../components/ButtonSubmit'
import { authLogin } from '../../store/fetchActions'

import { Loginbg, Logincontent, Logininfos, Loginform } from './styles'

function Login(){
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    
    function handleForm(e){
        const {name, value} = e.target
        setForm({ ...form, [name]: value })
    }

    const dispatch = useDispatch()

    function submitForm(e){
        e.preventDefault()
        
        dispatch(authLogin(form))

        setForm({
            email: '',
            password: ''
        })
    }   

    return(
       <Loginbg>
            <Container>
                <Logincontent>
                    <Logininfos>
                        <p>Bem Vindo ao</p>
                        <h1>Cadastrando</h1>
                    </Logininfos>
                    <Loginform onSubmit={submitForm}>
                        <p>Faça o login para entrar</p>
                        <input onChange={handleForm} name="email" type="text" placeholder="email" value={form.email}></input><br />
                        <input onChange={handleForm} name="password" type="password" placeholder="senha" value={form.password}></input><br />
                        <ButtonSubmit name="logar" />
                    </Loginform>
                </Logincontent>
            </Container>
       </Loginbg>
    )
}

export default Login