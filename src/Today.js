import styled from "styled-components";
import logoPequena from "./assets/logo-simplificada.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import CardToday from "./CardToday";

export default function Today() {
    return (
        <>
            <TodayPage>
                <NavBar>
                    <img src={logoPequena}></img>
                    <img src={logoPequena}></img>
                </NavBar>

                <TodayHabits>
                    <div>Segunda, 17/05</div>
                    <span>Nenhum hábito concluído ainda</span>
                </TodayHabits>

                <FeedToday>
                    <CardToday/>
                </FeedToday>

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

            </TodayPage>
        </>
    )
}

const TodayPage = styled.div`
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

p{
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 17.98px;
    line-height: 22.47px;
    color:#52B6FF;
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
`