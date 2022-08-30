import { useEffect, useState } from 'react';
import styled from 'styled-components'; 
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";

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

const ModalButton = styled.button`
    
`;

const ModalBody = styled(Modal.Body)`
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Timer = () => {
    const [timer, setTimer] = useState('00:25:00');
    const [timerValue, changeTimerValue] = useState('00:25:00');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <ModalButton onClick={handleClose}>
            Close
          </ModalButton>
          <ModalButton>Understood</ModalButton>
        </Modal.Footer>
      </TimerModal>
        </>
    );
}

export default Timer;