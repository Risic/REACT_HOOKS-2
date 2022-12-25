import { useEffect, useState } from "react";

import { Button, ButtonGroup } from 'react-bootstrap';

const InfiniteTimer = ({id, time, autoStart, step, onTick, onTimeStart, onTimePause}) => {
    const [timer, setTimer] = useState(time);
    const [timerInterval, setTimerInterval] = useState();
    const [stepTimer, setStepTimer] = useState(step);
    const [timerStatus, setTimerStatus] = useState(autoStart);

    const restartTimer = () => {
        setTimer(time)
        setStepTimer(step)
    }

    const onTimeEnd = (id, time) => {
        setTimer(time)
        console.log("Час таймера " + id + " вийшов!")
    }

    const onTimeChange = (id, time) => {
        setTimer(time)
        console.log("Час таймера " + id + " змінено на: " + time)
    }

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
        }

        onTick(timer, id)

        if (timer === 0) {
            onTimeEnd(id, time)
        }
    }, [timer])

    useEffect(() => {
        onTimeChange(id, time)
    },[time])

    return (
        <div className="timer">
            <p>Нескінченний таймер {id}</p>
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

export default InfiniteTimer