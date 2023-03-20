import styled from "styled-components";
import logoPequena from "./assets/logo-simplificada.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import CardToday from "./CardToday";
import { useState, useContext, useEffect } from "react";
import { InfoContext } from "./context/InfoContext";
import axios from "axios";
import { Link } from "react-router-dom";
import botoes from "./botoes";

export default function Today() {

    const [tarefaGet, setTarefaGet] = useState([]);
    const { image, token } = useContext(InfoContext);
    const [Arraycheck, setArrayCheck] = useState([]);
    const [check, setCheck] = useState(false);
    const [porcentagem, setPorcentagem] = useState(0);
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = (dataAtual.getMonth() + 1);
    const diadasemana = botoes.find(b => b.id === dataAtual.getDay()).semana;

    useEffect(() => { 
        const completedhabits = tarefaGet.filter(t => Arraycheck.includes(t.id));
        const porcentagem = Math.round((completedhabits.length / tarefaGet.length) * 100);
        setPorcentagem(porcentagem);
    },[Arraycheck, tarefaGet]);

    useEffect(() => {

        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;
        const config = {
            headers:
                { Authorization: `Bearer ${token}` }
        }

        const promise = axios.get(url, config);
        promise.then((res) => {
            setTarefaGet(res.data);

        })
        promise.catch(err => console(err.response.data.mensagem));
    }, []);


    function tarefaFeita(id) {
        const urlCheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;



        const data = { done: true }

        const config = {
            headers:
                { Authorization: `Bearer ${token}` }
        }

        const promisePost = axios.post(urlCheck, data, config);
        promisePost.then(res => {
            setArrayCheck(prevArrayCheck => [...prevArrayCheck, id]);
            setCheck(true);
            console.log(res.data);
           
        })
        promisePost.catch(err => {

            console.log(err.response.data);
        })
    }

    function desmarcarFeito(tarefaid) {
        const urlpost = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${tarefaid}/uncheck`;

        const data = { done: false }

        const config = {
            headers:
                { Authorization: `Bearer ${token}` }
        }

        const promisePost = axios.post(urlpost, data, config);
        promisePost.then(res => {
            setArrayCheck(prevArrayCheck => prevArrayCheck.filter(id => id !== tarefaid));
            setCheck(false);

        })
        promisePost.catch(err => {
            console.log(err.response.data);
        })
    }


    return (
        <>
            <TodayPage>
                <NavBar data-test="header">
                    <img src={logoPequena}></img>
                    <img src={image}></img>
                </NavBar>

                <TodayHabits>
                    <div data-test="today">{diadasemana}, {dia + "/" + mes}</div>
                    <span data-test="today-counter" style={{color: check ? '#8FC549' : '#BABABA'}}> {porcentagem}% de hábitos concluídos</span>
                </TodayHabits>

                <FeedToday>
                    {
                        tarefaGet.map((t) =>
                            <CardToday
                                tarefa={t}
                                done={() => tarefaFeita(t.id)}
                                notDone={() => desmarcarFeito(t.id)}
                                check={Arraycheck.includes(t.id)}
                            />
                        )
                    }

                </FeedToday>

                <Footer data-test="menu">
                    <Link data-test="habit-link" to={`/habitos`}><button>Hábitos</button></Link>

                    <div >
                        <Link data-test="today-link" to={`/hoje`}>
                            <CircularProgressbar
                                value={porcentagem}
                                text="Hoje"
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

            </TodayPage>
        </>
    )
}

const TodayPage = styled.div`
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

const TodayHabits = styled.div`
display: flex;
width: 340px;
flex-direction: column;
margin-top: 98px;
font-family: Lexend Deca;
margin-bottom: 28px;

div{
    color:#126BA5;
    font-size: 22.98px;
    line-height: 28.72px;
    font-weight: 400;
}

span {
    color:#BABABA;
    font-size: 17.98px;
    font-weight: 400;
    line-height: 22.47px;
}

`

const FeedToday = styled.div`
width: 340px;
margin-bottom: 70px;
`