import React, {FC} from 'react';
// @ts-ignore
import cl from './Title.module.css'

interface TitleProps{
    title:string;
}
const Title:FC<TitleProps> = ({title}) => {
    return (
        <div>
            <h1 className={cl.title}>{title}</h1>
        </div>
    );
};

export default Title;