import logoCompleta from "./assets/logo-completa.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Register(){
    return(
        <>
        <RegisterPage>
            <div>
        <img src={logoCompleta}></img>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="senha"></input>
        <input type="text" placeholder="nome"></input>
        <input type="url" placeholder="foto"></input>
        <button>Cadastrar</button>
        <Link to={`/`}>
        <p>Já tem uma conta? Faça login!</p>
        </Link>
        </div>
        </RegisterPage>
        </>
    )
}

const RegisterPage = styled.div`
width: 375px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img{
    width: 180px;
    height: 173.53px;
    margin-top: 68px;
    margin-bottom: 32.62px;
}

input{
    padding: 11px;
    width: 303px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    margin-bottom: 6px;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 25px;
    
}

input::placeholder{
    color:#DBDBDB;
}

button{
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    color:#FFFFFF;
    border: none;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20.98px;
    line-height: 26.22px;
    margin-bottom: 25px;
}

p{
    color:#52B6FF;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 13.98px;
    line-height: 17.47px;
    text-decoration-line: underline;
    margin-bottom: 25px;
}
`