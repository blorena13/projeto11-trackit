import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { InfoContext } from "./context/InfoContext";
import botoes from "./botoes";
import { ThreeDots } from "react-loader-spinner";

export default function CardHabits({ textInput, setTextInput, adicionarTarefa, MostrarCriar, setMostrarCriar, selecionado, handleButton, selected, tarefaServidor }) {

    const { token, disabled, setDisabled } = useContext(InfoContext);
   



    return (
        <>
            <SuperContainer>
                <CardContainer
                    data-test="habit-create-container"
                    MostrarCriar={MostrarCriar}>
                    <Card >
                        <input
                            data-test="habit-name-input"
                            value={textInput}
                            placeholder="nome do hábito"
                            required
                            onChange={(e) => setTextInput(e.target.value)}
                            disabled={disabled}
                        ></input>
                        <div>
                            {botoes.map((b) =>
                                <button style={{
                                    backgroundColor: selected.includes(b.id) ? '#CFCFCF' : '#FFFFFF',
                                    color: selected.includes(b.id) ? '#FFFFFF' : '#CFCFCF'
                                }}
                                    data-test="habit-day"
                                    disabled={disabled}
                                    onClick={() => {
                                        handleButton(b.id);
                                    }
                                    }
                                > {b.dia} </button>
                            )}

                        </div>
                    </Card>
                    <OptionCard>
                        <div>
                            <button
                                data-test="habit-create-cancel-btn"
                                
                                onClick={() =>
                                    setMostrarCriar(false)
                                } >Cancelar</button>

                            <button
                                data-test="habit-create-save-btn"
                                onClick={() => {
                                    tarefaServidor();
                                    adicionarTarefa();
                                }
                                }>  {disabled ? 
                                    <ThreeDots
                                height="30"
                                width="40"
                                radius="9"
                                color="#FFFFFF"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            /> : "Salvar"
                                 }  </button>
                        </div>
                    </OptionCard>

                </CardContainer>

            </SuperContainer>
        </>
    )
}

const SuperContainer = styled.div`
background-color: #E5E5E5;
`

const CardContainer = styled.div`
background-color: #FFFFFF;
display: ${({ MostrarCriar }) => MostrarCriar === true ? 'flex' : 'none'};
flex-direction: column;
align-items: center;

width: 340px;
border-radius: 5px;
margin-bottom: 10px;
`

const Card = styled.div`
background-color: #FFFFFF;
display: flex;
flex-direction: column;

div {
    display: flex;
    margin-top: 10px;
    
}

button {
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background: #FFFFFF;
    color: #DBDBDB;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    margin-right: 4px;
}

input {
width: 290px;
border: 1px solid #D5D5D5;
border-radius: 5px;
padding: 7px 9px 9px;
font-family: Lexend Deca;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
margin-top: 18px;
outline: 0;
}

input::placeholder{
    color:#DBDBDB;
}
`

const OptionCard = styled.div`
display: flex;
width: 320px;
margin-top: 36px;
justify-content: flex-end;
margin-bottom: 15px;

div{
    display: flex;
    justify-content: space-between;
    width: 183px;
    margin-right: 3px;
}

button {
    width: 84px;
    height: 35px;
    background-color: #FFFFFF;
    border: none;
    color:#52B6FF;
    padding: 7px 17px 8px 17px;
    font-family: Lexend Deca;
    font-size: 15.98px;
    line-height: 19.97px;
    border-radius: 5px;
    
    
}

button:nth-child(2){
    background-color: #52B6FF;
    color: #FFFFFF;
    padding: 7px 14px 8px 14px;
}
`

const LittleContainer = styled.div`
display: ${({ tarefaCriada }) => tarefaCriada === true ? 'flex' : 'none'};
flex-direction: column;


`

