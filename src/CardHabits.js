import { useState } from "react";
import styled from "styled-components";
import lixeira from "./assets/lixeira.png";
import axios from "axios";

export default function CardHabits({ textInput, setTextInput, task }) {

    const [selected, setSelected] = useState([]);
    const [cor, setCor] = useState('#FFFFFF');
    const [corLetra, setCorLetra] = useState('#DBDBDB');

    const [tarefaCriada, setTarefaCriada] = useState(false);
    const botoes = [
        { id: 0, dia: "D", semana: "Domingo" },
        { id: 1, dia: "S", semana: "Segunda-feira" },
        { id: 2, dia: "T", semana: "Terça-feira" },
        { id: 3, dia: "Q", semana: "Quarta-feira" },
        { id: 4, dia: "Q", semana: "Quinta-feira" },
        { id: 5, dia: "S", semana: "Sexta-feira" },
        { id: 6, dia: "S", semana: "Sábado" }
    ]

    function cliqueBotao(e) {
        const novaLetra = corLetra === '#DBDBDB' ? '#FFFFFF' : '#DBDBDB';
        setCorLetra(novaLetra);
        e.target.style.color = novaLetra;

        const novaCor = cor === '#FFFFFF' ? '#CFCFCF' : '#FFFFFF';
        setCor(novaCor);
        e.target.style.background = novaCor;
    }


    function tarefaServidor(e) {
        e.preventDefault();
        const config = {
            headers:
                { Authorization: `Bearer TOKEN` }
        }

        const urlPost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const body = { name: textInput, days: "" };

        const promise = axios.post(urlPost, body, config);
        promise.then(setTarefaCriada(true));
        promise.catch(err => alert(err.response.data.mensagem));
    }

    console.log(tarefaServidor)

    return (
        <>
            <CardContainer data-test="habit-create-container" tarefaCriada={tarefaCriada}>
                <Card >
                    <input data-test="habit-name-input"
                        value={textInput}
                        placeholder="nome do hábito"
                        required
                        onChange={(e) => setTextInput(e.target.value)}
                    ></input>
                    <div>
                        {botoes.map((b) =>
                            <button data-test="habit-day" onClick={cliqueBotao}> {b.dia} </button>
                        )}

                    </div>
                </Card>
                <OptionCard>
                    <div>
                        <button data-test="habit-create-cancel-btn" >Cancelar</button>
                        <button  data-test="habit-create-save-btn" onClick={() => {
                            tarefaServidor()
                            setTarefaCriada(true)
                        }

                        }>Salvar</button>
                    </div>
                </OptionCard>

            </CardContainer>

            <LittleContainer data-test="habit-container" tarefaCriada={tarefaCriada}>
                <LittleCard>
                    <span>
                        <p data-test="habit-name">{task}</p>
                        <div>
                            {
                                botoes.map((b) =>
                                    <button>{b.dia}</button>
                                )}

                        </div>
                    </span>
                    <img data-test="habit-delete-btn" src={lixeira}></img>
                </LittleCard>
            </LittleContainer>
        </>
    )
}


const CardContainer = styled.div`
background-color: #FFFFFF;
display: ${({ tarefaCriada }) => tarefaCriada === true ? 'none' : 'flex'};
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
    
    width: 183px;
}

button {
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
background-color: #FFFFFF;
flex-direction: column;
justify-content: center;
align-items: center;

border-radius: 5px;
margin-bottom: 10px;

`

const LittleCard = styled.div`
display: flex;
justify-content: space-between;
width: 320px;


span {
    display: flex;
    flex-direction: column;
    width: 234px;
}

p{
font-family: Lexend Deca;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
margin-bottom: 8px;
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
    margin-bottom: 15px;
}

img{
    width: 13px;
    height: 13px;
    display: flex;
    margin-top: 10px;
}
`