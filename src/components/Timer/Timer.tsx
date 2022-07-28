import { useEffect, useState } from 'react';
import styled from 'styled-components'; 


const TimerText = styled.p`
    font-family: Orbitron, sans-serif;
    font-weight: 900;
`

const Timer = () => {
    const [timer, setTimer] = useState('00:00:00');

    useEffect(() => {
        setTimer('00:00:00');
    }, [])




    return(
        <TimerText>{timer}</TimerText>
    );
}