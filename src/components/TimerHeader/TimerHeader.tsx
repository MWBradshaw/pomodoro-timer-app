import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const TimerHeaderBody = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    align-items: center;
    position: relative;
`

const TimerHeaderText = styled.p`
    font-family: Share Tech, sans serif;
    font-weight: 400px;
    font-size: 35px;
    color: black;
    text-align: center;
    margin: 0px;
`
const IconHamburger = styled.button`
    width: 32px;
    height: 32px; 
    position: absolute; 
    top: 50%;
    left: 2.5%;
    transform: translate(0%, -50%);
    border: 0px;
    background-color: white;
`

const TimerHeader = () => {
    return (
        <>
            <TimerHeaderBody>
                <IconHamburger>
                    <FontAwesomeIcon icon={solid('bars')} size="xl"/>
                </IconHamburger>
                <TimerHeaderText>Pomodoro</TimerHeaderText>
            </TimerHeaderBody>
        </>
    )
}

export default TimerHeader;