import React, {FC} from 'react';
import useTimeToEvent from "../../hooks/useTimeToEvent";
import TimerSector from "../../UI/TimerSector/TimerSector";
// @ts-ignore
import cl from './Timer.module.css'

const Timer: FC = () => {
    const events =  {
        myBirthday: {month: 'April', day: '23', hms: "00:00:00"},
        newYearDate: {month: 'January', day: '1', hms: "00:00:00"}
    }

    const timeToEvent = useTimeToEvent(events.myBirthday);

    return (
        <div className={cl.timer}>
            <TimerSector name={'days'}>{timeToEvent.days}</TimerSector>
            <TimerSector name={'hours'}>{timeToEvent.hours}</TimerSector>
            <TimerSector name={'minutes'}>{timeToEvent.minutes}</TimerSector>
            <TimerSector name={'seconds'}>{timeToEvent.seconds}</TimerSector>
        </div>
    );
};

export default Timer;