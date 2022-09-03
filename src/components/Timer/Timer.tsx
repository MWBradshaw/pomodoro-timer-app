import { useEffect, useState } from 'react';
import styled from 'styled-components'; 
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const HeaderText = styled.p`
    font-family: Share Tech, sans serif;
    font-weight: 400px;
    font-size: 60px;
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

const TimerModal = styled(Modal)`

`;

const ModalText = styled.p`
    font-family: Orbitron, sans-serif;
    font-weight: 900;
    font-size: 60px;
    color: black;
    text-align: center;
    align-self: center;
`

const ModalButton = styled.button`
    
`;

const ModalBody = styled(Modal.Body)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AdjustTimeBody = styled.div`
    display: flex;
    flex-direction: column;
`
const AdjustTimeUpButton = styled.button`
    border: 0px;
    background-color: transparent;
`;

const AdjustTimeDownButton = styled.button`
    border: 0px;
    background-color: transparent;
`;


const timeLeft = {
    hours: '00',
    minutes: '25',
    seconds: '00'
}

const Timer = () => {
   const [time, setTime] = useState()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        document.body.style.background = "#200910";
        const interval = setInterval(() => {
            updateTime();
        }, 1000);
        return() => clearInterval(interval);
    }, []);

    function updateTime() {
    }

    return(
        <>
        <HeaderText>
            My Pomodoro
        </HeaderText>

        <TimerBody>
            <TimerText>{timeLeft.hours}</TimerText>
            <TimerText>:</TimerText>
            <TimerText>{timeLeft.minutes}</TimerText>
            <TimerText>:</TimerText>
            <TimerText>{timeLeft.seconds}</TimerText>
        </TimerBody>

        <TimerButtonBody>
            <TimerButton>Start Timer</TimerButton>
            <TimerButton>Reset Timer</TimerButton>
            <TimerButton onClick={() => handleShow()}>Customize Timer</TimerButton>
        </TimerButtonBody>

        <TimerModal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <ModalBody>
            <AdjustTimeBody>
                <AdjustTimeUpButton>
                    <FontAwesomeIcon icon={solid('chevron-up')} />
                </AdjustTimeUpButton>
                <ModalText>{timeLeft.hours}</ModalText>
                <AdjustTimeDownButton>
                    <FontAwesomeIcon icon={solid('chevron-down')} />
                </AdjustTimeDownButton>
            </AdjustTimeBody>
            <ModalText>:</ModalText>
            <AdjustTimeBody>
                <AdjustTimeUpButton>
                    <FontAwesomeIcon icon={solid('chevron-up')} />
                </AdjustTimeUpButton>
                <ModalText>{timeLeft.minutes}</ModalText>
                <AdjustTimeDownButton>
                    <FontAwesomeIcon icon={solid('chevron-down')} />
                </AdjustTimeDownButton>
            </AdjustTimeBody>
            <ModalText>:</ModalText>
            <AdjustTimeBody>
                <AdjustTimeUpButton>
                    <FontAwesomeIcon icon={solid('chevron-up')} />
                </AdjustTimeUpButton>
                <ModalText>{timeLeft.seconds}</ModalText>
                <AdjustTimeDownButton>
                    <FontAwesomeIcon icon={solid('chevron-down')} />
                </AdjustTimeDownButton>
            </AdjustTimeBody>
        </ModalBody>
        <Modal.Footer>
          <ModalButton onClick={handleClose}>
            Close
          </ModalButton>
          <ModalButton>Set Timer</ModalButton>
        </Modal.Footer>
      </TimerModal>
        </>
    );
}

export default Timer;