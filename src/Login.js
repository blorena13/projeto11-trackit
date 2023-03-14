import logoCompleta from "./assets/logo-completa.png";
import styled from "styled-components";

export default function Login(){
    return (
        <>
        <PageContainer>
            <div>
            <img src={logoCompleta}></img>
            <input></input>
            <input></input>
            <button>Entrar</button>
            <p>Não tem uma conta? Cadastre-se!</p>
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

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img{
    width: 154.94px;
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