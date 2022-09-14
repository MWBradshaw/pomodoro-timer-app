import { useEffect, useState } from 'react';
import styled from 'styled-components'; 
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const TimerText = styled.p`
    font-family: Orbitron, sans-serif;
    font-weight: 900;
    font-size: 12vw;
    color: black;
    text-align: center;
    align-self: center;
    margin: 0 px;
`

const TimerBody = styled.div`
    height: 345px;
    display: flex;
    margin-bottom: 80px;
    justify-content: center;
`

const TimerButtonBody = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


const TimerButton = styled.button`
    height: 65px;
    width: 340px;
    border: 4px solid black;
    border-radius: 30px;
    margin-bottom: 30px;
    background-color: transparent;
    font-size: 25px;
    font-family: Orbitron, sans-serif;
    font-weight: 900;
`

const TimerModal = styled(Modal)`

`;

const ModalText = styled.p`
    font-family: Orbitron, sans-serif;
    font-weight: 900;
    font-size: 10vw;
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

const ModalFooter = styled(Modal.Footer)`
    justify-content: space-between;
    padding: 5px 100px 5px 100px;
`;

const defaultTime = {
    hours: '00',
    minutes: '25',
    seconds: '00'
}

const Timer = () => {

   const [hour, setHour] = useState("00");
   const [minute, setMinute] = useState("25");
   const [second, setSecond] = useState("00");


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        // const interval = setInterval(() => {
        //     updateTime();
        // }, 1000);
        // return() => clearInterval(interval);
    }, []);

    function updateTime() {
    }


    const incrementHour = () => {
        let hourValue = parseInt(hour);
        if(hour !== "99" && hourValue < 10)
        {
            hourValue += 1;
            setHour(`${hourValue}`);
        }
        else{
            hourValue += 1;
            setHour(`${hourValue}`); 
        }
        
    }

    const decrementHour = () => {
        if(hour !== "00")
        {
            let hourValue = parseInt(hour);
            hourValue -= 1;
            setHour(hourValue.toString());
        }
    }
    
    const incrementMinute = () => {
        if(minute !== "60")
        {
            let minuteValue = parseInt(minute);
            minuteValue += 1;
            setMinute(minuteValue.toString());
        }
    }

    const decrementMinute = () => {
        if(minute !== "00")
        {
            let minuteValue = parseInt(minute);
            minuteValue -= 1;
            setMinute(minuteValue.toString());
        }
    }

    const incrementSecond = () => {
        if(second !== "60")
        {
            let secondValue = parseInt(second);
            secondValue += 1;
            setSecond(secondValue.toString());
            return second;
        }
    }

    const decrementSecond = () => {
        if(second !== "00")
        {
            let secondValue = parseInt(second);
            secondValue -= 1;
            setSecond(secondValue.toString());
            return second;
        }
    }

    const resetTime = () => {


    }



    return(
        <>
        <TimerBody>
                <TimerText>{hour}</TimerText>
                <TimerText>:</TimerText>
                <TimerText>{minute}</TimerText>
                <TimerText>:</TimerText>
                <TimerText>{second}</TimerText>
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
                <AdjustTimeUpButton onClick={()=> incrementHour()}>
                    <FontAwesomeIcon icon={solid('chevron-up')} size="lg"/>
                </AdjustTimeUpButton>
                <ModalText>{hour}</ModalText>
                <AdjustTimeDownButton onClick={()=> decrementHour()}>
                    <FontAwesomeIcon icon={solid('chevron-down')} size="xl"/>
                </AdjustTimeDownButton>
            </AdjustTimeBody>
            <ModalText>:</ModalText>
            <AdjustTimeBody>
                <AdjustTimeUpButton onClick={()=> incrementMinute()}>
                    <FontAwesomeIcon icon={solid('chevron-up')} size="xl"/>
                </AdjustTimeUpButton>
                <ModalText>{minute}</ModalText>
                <AdjustTimeDownButton onClick={()=> decrementMinute()}>
                    <FontAwesomeIcon icon={solid('chevron-down')} size="xl"/>
                </AdjustTimeDownButton>
            </AdjustTimeBody>
            <ModalText>:</ModalText>
            <AdjustTimeBody>
                <AdjustTimeUpButton onClick={()=> incrementSecond()}>
                    <FontAwesomeIcon icon={solid('chevron-up')} size="xl"/>
                </AdjustTimeUpButton>
                <ModalText>{second}</ModalText>
                <AdjustTimeDownButton onClick={()=> decrementSecond()}>
                    <FontAwesomeIcon icon={solid('chevron-down')} size="xl"/>
                </AdjustTimeDownButton>
            </AdjustTimeBody>
        </ModalBody>
        <ModalFooter>
          <ModalButton onClick={handleClose}>
            Close
          </ModalButton>
          <ModalButton>Set Timer</ModalButton>
        </ModalFooter>
      </TimerModal>
        </>
    );
}

export default Timer;