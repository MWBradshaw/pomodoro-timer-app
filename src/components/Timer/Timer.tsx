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

   const [time, setTime] = useState();

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


    const incrementHour = () => {
        if(defaultTime.hours !== "99")
        {
            let hourValue = parseInt(defaultTime.hours);
            hourValue += 1;
            defaultTime.hours = `0${hourValue}`;
            return defaultTime.hours;
        }
    }

    const decrementHour = () => {
        if(defaultTime.hours !== "00")
        {
            let hourValue = parseInt(defaultTime.hours);
            hourValue -= 1;
            defaultTime.hours = hourValue.toString();
            return defaultTime.hours;
        }
    }
    
    const incrementMinute = () => {
        if(defaultTime.minutes !== "60")
        {
            let minuteValue = parseInt(defaultTime.minutes);
            minuteValue += 1;

            if(parseInt(defaultTime.minutes) < 10)
            {
                defaultTime.minutes = `0${minuteValue}`;
                return defaultTime.minutes;
            }

            defaultTime.minutes = minuteValue.toString();
            return defaultTime.minutes;
        }
    }

    const decrementMinute = () => {
        if(defaultTime.minutes !== "00")
        {
            let minuteValue = parseInt(defaultTime.minutes);
            minuteValue -= 1;

            if(parseInt(defaultTime.minutes) < 10)
            {
                defaultTime.minutes = `0${minuteValue}`;
                return defaultTime.minutes;
            }

            defaultTime.minutes = minuteValue.toString();
            return defaultTime.minutes;
        }
    }

    const incrementSecond = () => {
        if(defaultTime.seconds !== "60")
        {
            let secondValue = parseInt(defaultTime.seconds);
            secondValue += 1;

            if(parseInt(defaultTime.seconds) < 10)
            {
                defaultTime.seconds = `0${secondValue}`;
                return defaultTime.seconds;
            }

            defaultTime.seconds = secondValue.toString();
            return defaultTime.seconds;
        }
    }

    const decrementSecond = () => {
        if(defaultTime.seconds !== "00")
        {
            let secondValue = parseInt(defaultTime.seconds);
            secondValue -= 1;

            if(parseInt(defaultTime.seconds) < 10)
            {
                defaultTime.seconds = `0${secondValue}`;
                return defaultTime.seconds;
            }

            defaultTime.seconds = secondValue.toString();
            return defaultTime.seconds;
        }
    }

    const resetTime = () => {


    }



    return(
        <>
        <HeaderText>
            My Pomodoro
        </HeaderText>

        <TimerBody>
            <TimerText>{defaultTime.hours}</TimerText>
            <TimerText>:</TimerText>
            <TimerText>{defaultTime.minutes}</TimerText>
            <TimerText>:</TimerText>
            <TimerText>{defaultTime.seconds}</TimerText>
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
                <ModalText>{defaultTime.hours}</ModalText>
                <AdjustTimeDownButton onClick={()=> decrementHour()}>
                    <FontAwesomeIcon icon={solid('chevron-down')} size="xl"/>
                </AdjustTimeDownButton>
            </AdjustTimeBody>
            <ModalText>:</ModalText>
            <AdjustTimeBody>
                <AdjustTimeUpButton onClick={()=> incrementMinute()}>
                    <FontAwesomeIcon icon={solid('chevron-up')} size="xl"/>
                </AdjustTimeUpButton>
                <ModalText>{defaultTime.minutes}</ModalText>
                <AdjustTimeDownButton onClick={()=> decrementMinute()}>
                    <FontAwesomeIcon icon={solid('chevron-down')} size="xl"/>
                </AdjustTimeDownButton>
            </AdjustTimeBody>
            <ModalText>:</ModalText>
            <AdjustTimeBody>
                <AdjustTimeUpButton onClick={()=> incrementSecond()}>
                    <FontAwesomeIcon icon={solid('chevron-up')} size="xl"/>
                </AdjustTimeUpButton>
                <ModalText>{defaultTime.seconds}</ModalText>
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