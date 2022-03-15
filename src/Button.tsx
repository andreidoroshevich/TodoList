import React from 'react';
import {FilterType} from "./App";

type ButtonPropsType = {
    title: string
    onClickHandler: ()=>void
}

const Button = (props: ButtonPropsType) => {
    return (
        <>
            <button onClick={props.onClickHandler}>{props.title}</button>
        </>
    );
};

export default Button;