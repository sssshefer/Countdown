import React, {useEffect, useState} from 'react';
import {EventProps} from "../types";

export default function useTimeToEvent(event:EventProps)  {
    const [timeToEvent, setTimeToEvent] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
    });

    useEffect(()=>{
        setTimeToEvent(calcTimeToEvent(event))
        let interval = setInterval(()=>{
            setTimeToEvent(calcTimeToEvent(event))
        },1000)

        return ()=> clearInterval(interval)
    },[])

    const getMsToEvent = (endDate: string) => {
        const today = new Date();
        return Date.parse(endDate) - Date.parse(today.toString());
    }
    const calcTimeToEvent = (endDate :EventProps) => {
        const today = new Date();
        let fullEndDate = endDate.month + ' ' + endDate.day + ' ' + today.getFullYear() + ' ' + endDate.hms;
        let msToEvent = getMsToEvent(fullEndDate);
        if(msToEvent < 0){
            fullEndDate = endDate.month + ' ' + endDate.day + ' ' + (today.getFullYear()+1) + ' ' + endDate.hms;
            msToEvent = getMsToEvent(fullEndDate);
        }
        return ({
            seconds: Math.floor((msToEvent / 1000) % 60),
            minutes: Math.floor((msToEvent / 1000 / 60) % 60),
            hours: Math.floor((msToEvent / (1000 * 60 * 60)) % 24),
            days: Math.floor(msToEvent / (1000 * 60 * 60 * 24)),
        })
    }
    return (
        timeToEvent
    );
};
