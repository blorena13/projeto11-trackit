import { useState } from "react";
import styled from "styled-components";
import correto from "./assets/correto.png"

export default function CardToday({ tarefa, done, notDone, check}) {

    const [isChecked, setIsChecked] = useState(check);

    // function comparar(){
    //     if (tarefa.currentSequence === tarefa.highestSequence) {
    //        return true
    //     } else {
    //        return false
    //     }
    // }

    return (
        <>
            <Card data-test="today-habit-container">

                <div>
                    <p data-test="today-habit-name"> {tarefa.name} </p>
                    <span>
                        <p data-test="today-habit-sequence" >Sequência atual: <span style={{color: isChecked ? '#8FC549' : '#666666' }}>{tarefa.currentSequence} dias</span>  </p>
                        <p data-test="today-habit-record">Seu recorde: <span style={{color: isChecked ? '#8FC549' : '#666666' }} >{tarefa.highestSequence} dias</span></p>
                    </span>

                </div>
                <button data-test="today-habit-check-btn" style={{backgroundColor: isChecked ? '#8FC549' : '#EBEBEB'}} 
                onClick={() => {
                    setIsChecked(!isChecked);
                    if(isChecked){
                        notDone();
                    } else{
                        done();
                    }
                    
                }
            }
                > 
                <img src={correto}></img></button>
            </Card>
        </>
    )
}

const Card = styled.div`
background-color: #FFFFFF;
display: flex;
justify-content: space-between;
width: 310px;
padding: 10px;
border-radius:5px;
margin-bottom: 10px;


div{
    display: flex;
    width: 250px;
    flex-direction: column;
    color:#666666;
}

p{
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 24.97px;
}

span {
    margin-top: 7px;
}

span p {
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 12.98px;
    line-height: 16.22px;
}

button {
    width: 69px;
    height: 69px;
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
}

`