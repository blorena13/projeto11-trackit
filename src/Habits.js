import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";
import logoPequena from "./assets/logo-simplificada.png";
import CardHabits from "./CardHabits";
import { useState, useContext, useEffect } from "react";
import { InfoContext } from "./context/InfoContext";
import axios from "axios";
import { Link } from "react-router-dom";
import LittleCard from "./LittleCard";

export default function Habits() {

    const { image, tarefaCriada, token, setDisabled, disabled } = useContext(InfoContext);
    const [textInput, setTextInput] = useState("");
    const [habitos, setHabitos] =  useState([]);
    const [mostrarCriar, setMostrarCriar] = useState(false);
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

    


    function adicionarTarefa(){
        const novaTarefaArray = [...habitos, textInput];
        setHabitos(novaTarefaArray);
        setTextInput("");
        setMostrarCriar(false);
    }

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const config = {
            headers:
                { Authorization: `Bearer ${token}` }
        }

        const promise = axios.get(url, config)
        promise.then(res => 
            {
                setHabitos(res.data)
                console.log(res.data)
            })
        promise.catch(err => alert(err.response.data.mensagem))

    }, [])

    function tarefaServidor() {

        const urlPost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const config = {
            headers:
                { Authorization: `Bearer ${token}` }
        }

        const body = { name: textInput, days: selecionado };

        const promise = axios.post(urlPost, body, config);
        promise.then(res => {
            setHabitos(res.data);
            setDisabled(true);
        }

        );
        promise.catch(err => {
            alert(err.response.data.mensagem);
            setDisabled(false);
        });
    }

  function deletePost(id){
    const urlDelete = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    const config = {
        headers:
            { Authorization: `Bearer ${token}` }
    }

     const promise = axios.delete(urlDelete, config);
     promise.then(res => {
        const novaListaDeHabitos = habitos.filter(habito => habito.id !== id);
        setHabitos(novaListaDeHabitos);
        
     })
     promise.catch(err => console.log(err.response.data.mensagem));
   }

    console.log(habitos)

    return (
        <>
            <HabitsPage>

                <NavBar data-test="header">
                    <img src={logoPequena}></img>
                    <img src={image}></img>
                </NavBar>

                <ButtonHabits>
                    <p>Meus hábitos</p>
                    <button  
                    data-test="habit-create-btn" 
                    onClick={()=> 
                    setMostrarCriar(true)} 
                    >+</button>
                </ButtonHabits>

                <FeedHabits>
                    <CardHabits 
                    handleButton={handleButton} 
                    selected={selected} 
                    selecionado={selecionado} 
                    MostrarCriar={mostrarCriar} 
                    setMostrarCriar={setMostrarCriar} 
                    adicionarTarefa={adicionarTarefa} 
                    textInput={textInput} 
                    setTextInput={setTextInput}
                    tarefaServidor={tarefaServidor}
                    />

                    {habitos.map((task) =>
                    <LittleCard 
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    task={task.days}
                    deletepost={deletePost}
                    

                      />
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
