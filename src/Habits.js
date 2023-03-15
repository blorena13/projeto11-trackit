import styled from "styled-components";
import logoPequena from "./assets/logo-simplificada.png";

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
justify-content: space-between;
align-items: center;
margin-top: 22px;
margin-bottom: 28px;
margin-top: 92px;

p{
    font-family: Lexend Deca;
    font-size: 22.98px;
    font-weight: 400;
    line-height: 28.72px;
    color:#126BA5;
    margin-left: 17px;
}

button{
background-color: #52B6FF;
width: 40px;
height: 35px;
border-radius: 5px;
border: none;
margin-right: 18px;
font-size: 26.98px;
font-weight: 400;
line-height: 33.72px;
color:#FFFFFF;
font-family: 'Lexend Deca';
}

`