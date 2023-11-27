import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Column, Container, TenhoConta, FazerLogin, Termos, Row, SubtitleLogin, Title, TitleRegister, Wrapper } from "./styles"

const Register = () => {
    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
            <Wrapper>
                <TitleRegister>Comece agora grátis</TitleRegister>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form>
                    <Input placeholder="Nome completo" type="text" leftIcon={<MdPerson color='#8647AD'/>}/>  
                    <Input placeholder="email" leftIcon={<MdEmail color='#8647AD'/>}/>    
                    <Input placeholder="senha" type="password" leftIcon={<MdLock color='#8647AD'/>}/>  
                    <Button title="Criar minha conta" variant="secondary" className="larger"/>  
                </form>
                <Termos>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Termos>
                <Row>
                    <TenhoConta>Já tenho conta.</TenhoConta>
                    <FazerLogin>Fazer login</FazerLogin>
                </Row>
            </Wrapper>
            </Column>
        </Container>
        </>
    );
};

export { Register };