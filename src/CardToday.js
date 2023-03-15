import styled from "styled-components";
import correto from "./assets/correto.png"

export default function CardToday() {
    return (
        <>
            <Card>
                <div>
                    <p>Ler 1 capítulo de livro</p>
                    <span>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                    </span>

                </div>
                <button> <img src={correto}></img></button>
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


div{
    display: flex;
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