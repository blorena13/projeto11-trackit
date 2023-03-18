import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { InfoContext } from "./context/InfoContext";
import botoes from "./botoes";
import LittleCard from "./LittleCard";

export default function CardHabits({ textInput, setTextInput }) {

    const { token, tarefaCriada, setTarefaCriada } = useContext(InfoContext);

    const [selected, setSelected] = useState([]);
    const selecionado = (selected);
    const [novaTarefa, setNovaTarefa] = useState([]);
    


    const handleButton = (selecionado) => {
        if (selected.includes(selecionado)) {
            setSelected(selected.filter((buttonId) => buttonId !== selecionado))

        } else {
            setSelected([...selected, selecionado]);
        }
    }


    function tarefaServidor() {
       
        const config = {
            headers:
                { Authorization: `Bearer ${token}` }
        }

        const urlPost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const body = { name: textInput, days: selecionado };
        console.log(body);

        const promise = axios.post(urlPost, body, config);
        promise.then(res => {
            setTarefaCriada(true)
            setNovaTarefa(res.data)
        }

        );
        promise.catch(err => alert(err.response.data.mensagem));
    }

    
    console.log(novaTarefa)

    return (
        <>
        <SuperContainer>
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
                            <button style={{
                                backgroundColor: selected.includes(b.id) ? '#CFCFCF' : '#FFFFFF',
                                color: selected.includes(b.id) ? '#FFFFFF' : '#CFCFCF'
                            }} data-test="habit-day"
                                onClick={() => {
                                    handleButton(b.id);
                                    selected.includes(b.id);
                                }
                                }
                            > {b.dia} </button>
                        )}

                    </div>
                </Card>
                <OptionCard>
                    <div>
                        <button data-test="habit-create-cancel-btn"  >Cancelar</button>
                        <button data-test="habit-create-save-btn" onClick={() => {
                            tarefaServidor()
                            setTarefaCriada(true)
                        }

                        }>Salvar</button>
                    </div>
                </OptionCard>

            </CardContainer>


            
            </SuperContainer>
        </>
    )
}

const SuperContainer = styled.div`
background-color: red;
`

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
flex-direction: column;


`

