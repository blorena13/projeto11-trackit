import styled from "styled-components"

export default function CardHabits() {



    return (
        <>
            <CardContainer>
                <Card>
                    <input placeholder="nome do hábito"></input>
                    <div>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </div>
                    </Card>
                    <OptionCard>
                        <div>
                        <button>Cancelar</button>
                        <button>Salvar</button>
                        </div>
                    </OptionCard>

                
            </CardContainer>
        </>
    )
}


const CardContainer = styled.div`
background-color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;

width: 340px;
border-radius: 5px;
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