import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";
import logoPequena from "./assets/logo-simplificada.png";
import CardHabits from "./CardHabits";

export default function Habits() {
    return (
        <>
            <HabitsPage>

                <NavBar>
                    <img src={logoPequena}></img>
                    <img src={logoPequena}></img>
                </NavBar>

                <ButtonHabits>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </ButtonHabits>

                <FeedHabits>
                    <CardHabits/>

                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </FeedHabits>

<Footer>
<p>Hábitos</p>
<div >
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
</div>
<p>Histórico</p>
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

p{
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 17.98px;
    line-height: 22.47px;
    color:#52B6FF;
}

`
