import lixeira from "./assets/lixeira.png";
import styled from "styled-components";
import botoes from "./botoes";

export default function LittleCard({ name, task, deletepost, id }) {

    function askDelete(){
        if (window.confirm("Deseja apagar este hábito?")){
            deletepost(id);
        } else {

        }
    }


    return (
        <>
            <ContainerLittle>
                <LittleCards data-test="habit-container">
                    <span>
                        <p data-test="habit-name">{name}</p>
                        <div>
                            {
                                botoes.map((b) => {
                                    const isTaskInclude = task && Array.isArray(task) && task.includes(b.id);

                                    return (
                                        <button  data-test="habit-day" style={{
                                            backgroundColor: isTaskInclude ? '#CFCFCF' : '#FFFFFF',
                                            color: isTaskInclude ? '#FFFFFF' : '#CFCFCF'
                                        }}
                                        >{b.dia}</button>

                                    )
                                }

                                )}

                        </div>
                    </span>
                    <img data-test="habit-delete-btn" src={lixeira} onClick={() => askDelete()} ></img>
                </LittleCards>
            </ContainerLittle>
        </>
    )
}


const LittleCards = styled.div`
display: flex;
justify-content: space-between;
width: 320px;

span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 249px;
}

p{
font-family: Lexend Deca;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
margin-bottom: 8px;
}

p::first-letter{
    text-transform: uppercase;
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

const ContainerLittle = styled.div`
display: flex;
background-color: #FFFFFF;
flex-direction: column;
justify-content: center;
align-items: center;

border-radius: 5px;
margin-bottom: 10px;
`