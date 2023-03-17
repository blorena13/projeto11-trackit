import logoCompleta from "./assets/logo-completa.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { InfoContext } from "./context/InfoContext";

export default function Login() {

    const navigate = useNavigate();
    const {email, setEmail, image, setImage, password, setPassword} = useContext(InfoContext);

    function login(e){
        e.preventDefault();

        const urlPost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const body = { email: email, password: password};

        const promise = axios.post(urlPost, body)
        promise.then(res => navigate("/hoje"));
        promise.catch(err => alert(err.response.data.mensagem));
    }



    return (
        <>
            <PageContainer>
                <div>
                    <form onSubmit={login}>
                        <img src={logoCompleta}></img>
                        <input
                        data-test="email-input"
                        type="email" 
                        value={email}
                        placeholder="email"
                        onChange={e=> setEmail(e.target.value)}
                        ></input>

                        <input 
                        data-test="password-input"
                        type="password"
                        value={password}
                        placeholder="senha"
                        onChange={e=> setPassword(e.target.value)}
                        ></input>

                        <button data-test="login-btn" type="submit">Entrar</button>
                    </form>

                    <Link data-test="signup-link" to={`/cadastro`}>
                        <p>Não tem uma conta? Cadastre-se!</p>
                    </Link>
                </div>
            </PageContainer>
        </>
    )
}

const PageContainer = styled.div`

width: 375px;
height: 100%;

display: flex;
justify-content: center;
align-items: center;

div, form{
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
    outline: 0;
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
    
}
`