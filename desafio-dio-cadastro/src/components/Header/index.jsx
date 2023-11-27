import React from 'react'
import { Button } from '../Button';
import logo from '../../assets/logo-dio.png'

import {
    Container,
    MenuRight,
    Row,
    Wrapper
} from './styles'
import { useNavigate } from 'react-router';

const Header = () => {
const navigate = useNavigate();

const handleClick = (e) => {
    if(e.target.innerText === 'Entrar') {
        navigate('/login');
    } else {
        navigate('/register');
    }
}

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da Dio" width="70px"/>
            </Row>
            <Row>
                <MenuRight href='/'>Home</MenuRight>
                <Button title="Entrar" onClick={handleClick}></Button>
                <Button title="Cadastrar" onClick={handleClick}></Button>
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
