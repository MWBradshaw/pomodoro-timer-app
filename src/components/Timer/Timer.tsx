import { useEffect, useState } from 'react';
import styled from 'styled-components'; 

const HeaderText = styled.p`
    font-family: Share Tech, sans serif;
    font-weight: 400px;
    font-size: 40px;
    color: white;
    text-align: center;
    margin: 46 0px;
`

const TimerText = styled.p`
    font-family: Orbitron, sans-serif;
    font-weight: 900;
    font-size: 60px;
    color: white;
    text-align: center;
    align-self: center;
`

const TimerBody = styled.div`
    height: 345px;
    display: flex;
    margin-bottom: 80px;
    justify-content: center;
`

const TimerButtonBody = styled.div`
    display: flex;
    justify-content: space-evenly;
`


const TimerButton = styled.button`
    height: 65px;
    width: 340px;
    border: 0px;
    border-radius: 30px;
    margin-bottom: 30px;
`

const Timer = () => {
    const [timer, setTimer] = useState('00:25:00');

    useEffect(() => {
        document.body.style.background = "#200910";
        setTimer('00:25:00');
    }, []);

    return(
        <>
        <HeaderText>
            My Pomodoro
        </HeaderText>

        <TimerBody>
            <TimerText>{timer}</TimerText>
        </TimerBody>

        <TimerButtonBody>
            <TimerButton>Start Timer</TimerButton>
            <TimerButton>Reset Timer</TimerButton>
            <TimerButton>Customize Timer</TimerButton>
        </TimerButtonBody>
        </>
    );
}

export default Timer;