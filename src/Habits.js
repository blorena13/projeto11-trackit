import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";
import logoPequena from "./assets/logo-simplificada.png";
import CardHabits from "./CardHabits";
import { useState, useContext } from "react";
import { InfoContext } from "./context/InfoContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Habits() {

    const { image, tarefa, setTarefa } = useContext(InfoContext);
    const [textInput, setTextInput] = useState("");

    function adicionarTarefa(){
        const novaTarefa = [...tarefa, textInput];
        setTarefa(novaTarefa);
        setTextInput("");
    }

    
    return (
        <>
            <HabitsPage>

                <NavBar data-test="header">
                    <img src={logoPequena}></img>
                    <img src={image}></img>
                </NavBar>

                <ButtonHabits>
                    <p>Meus hábitos</p>
                    <button  data-test="habit-create-btn" onClick={adicionarTarefa} >+</button>
                </ButtonHabits>

                <FeedHabits>
                    {tarefa.map((task) =>
                    <CardHabits task={task} textInput={textInput} setTextInput={setTextInput} />
                    )}
                    

                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </FeedHabits>

                <Footer data-test="menu">
                    <Link data-test="habit-link" to={`/habitos`}>
                        <button>Hábitos</button>
                    </Link>

                    <div >
                        <Link  data-test="today-link" to={`/hoje`}>
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

            </HabitsPage>
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

const ButtonHabits = styled.div`
display: flex;
width: 340px;
justify-content: space-between;
align-items: center;
margin-bottom: 28px;
margin-top: 92px;

p{
    font-family: Lexend Deca;
    font-size: 22.98px;
    font-weight: 400;
    line-height: 28.72px;
    color:#126BA5;
}

button{
background-color: #52B6FF;
width: 40px;
height: 35px;
border-radius: 5px;
border: none;
font-size: 26.98px;
font-weight: 400;
line-height: 33.72px;
color:#FFFFFF;
font-family: 'Lexend Deca';
}

`

const FeedHabits = styled.div`
display: flex;
flex-direction: column;
width: 340px;
justify-content: center;

p{
    font-family: Lexend Deca;
    font-size: 17.976px;
    font-weight: 400;
    line-height: 22px;
    color:#666666;
    margin-top: 29px;
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
        alignment-baseline :middle;
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
