import styled from "styled-components";
import logoPequena from "./assets/logo-simplificada.png";

export default function History(){
    return(
        <>
         <NavBar>
                <img src={logoPequena}></img>
                <img src={logoPequena}></img>
            </NavBar>
        </>
    )
}

const HabitsPage = styled.div`
position: absolute;
background-color: #E5E5E5;
width: 375px;
height: 100%;
display: flex;
flex-direction: column;
`

const NavBar = styled.div`
background-color: #126BA5;
width: 375px;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;

img{
    width: 97px;
    height: 49px;
    margin-left: 18px;
}
img:nth-child(2){
width:51px;
height: 51px;
border-radius: 98.5px;
margin-right: 18px;
}

`