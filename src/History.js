import styled from "styled-components";
import logoPequena from "./assets/logo-simplificada.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState, useContext } from "react";
import { InfoContext } from "./context/InfoContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function History() {

    const { image } = useContext(InfoContext);

    return (
        <>
            <HistoryPage>

                <NavBar data-test="header">
                    <img src={logoPequena}></img>
                    <img src={image}></img>
                </NavBar>

                <FeedHistory>
                    <span>Histórico</span>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </FeedHistory>

                <Footer data-test="menu">
                    <Link data-test="habit-link" to={`/habitos`}>
                        <button>Hábitos</button>
                    </Link>

                    <div > <Link data-test="today-link" to={`/hoje`}>
                        <CircularProgressbar text="Hoje"
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#3e98c7",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent",
                            })}
                        />
                    </Link>
                    </div>
                    <Link data-test="history-link" to={`/historico`}>
                    <button>Histórico</button>
                    </Link>

                </Footer>

            </HistoryPage>
        </>
    )
}

const HistoryPage = styled.div`
position: absolute;
background-color: #E5E5E5;
width: 375px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
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

const Footer = styled.div`
background-color:  #FFFFFF;
width: 375px;
height: 70px;
display: flex;
align-items: center;
justify-content: space-around;

position: fixed;
bottom: 0;
left: 0;

div {
    width:91px;
    height: 91px;
    margin-bottom: 50px;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 17.98px;
    line-height: 22.47px;
    .CircularProgressbar-text{
        text-anchor: middle;
        alignment-baseline: middle;
    }
}

button{
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 17.98px;
    line-height: 22.47px;
    color:#52B6FF;
    border: none;
    background: #FFFFFF;
}

`

const FeedHistory = styled.div`
width: 340px;
margin-top: 98px;
font-family: Lexend Deca;

span {
font-size: 22.98px;
font-weight: 400;
line-height: 28.72px;
color:#126BA5;

}

p{
    color:#666666;
    font-size: 19.98px;
    font-weight: 400;
    line-height: 24.97px;
    margin-top: 17px;
}
`