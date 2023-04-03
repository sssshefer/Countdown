import React, {FC} from 'react';
// @ts-ignore
import cl from './TimerSector.module.css';
import {TimerSectorProps} from "../../types";


const TimerSector: FC<TimerSectorProps> = ({children, name}) => {
    return (
        <div className={cl.timerSector}>
            <div className={cl.value}>{children}</div>
            <h2 className={cl.title}> {name}</h2>

        </div>
    );
};

export default TimerSector;