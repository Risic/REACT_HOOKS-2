import { useEffect, useState } from "react";

import { Button, ButtonGroup } from 'react-bootstrap';

const Timer = ({id, time, autoStart, step, onTick, onTimeStart, onTimePause, onTimeEnd}) => {
    const [timer, setTimer] = useState(time);
    const [timerInterval, setTimerInterval] = useState();
    const [stepTimer, setStepTimer] = useState(step);
    const [timerStatus, setTimerStatus] = useState(autoStart);

    useEffect(() => {
        if (timerStatus) {
            onTimeStart(id)
            setTimerInterval(
                setInterval(() => {
                    setTimer((prev) => prev - stepTimer)
                }, stepTimer*1000)
            )
        } else {
            onTimePause(id)
            clearInterval(timerInterval)
        }
    }, [timerStatus, stepTimer])

    useEffect(() => {
        if (timer < stepTimer) {
            setStepTimer(timer)
            clearInterval(timerInterval)
        }

        onTick(timer, id)

        if (timer === 0) {
            onTimeEnd(id)
        }
    }, [timer])

    const restartTimer = () => {
        setTimer(time)
        setStepTimer(step)
    }

    return (
        <div className="timer">
            <p>Таймер {id}</p>
            <div id="timerOuotput">{timer}</div>
            <ButtonGroup className="timerBtn">
                <Button 
                    variant="primary" 
                    className="startBtn" 
                    onClick={() => {setTimerStatus(!timerStatus)}}
                >{timerStatus ? "Pause" : "Start"}</Button>{' '}
                <Button 
                    variant="primary" 
                    className="rsBtn" 
                    onClick={restartTimer}
                >Restart</Button>{' '}
            </ButtonGroup>
        </div>
    )
}

export default Timer