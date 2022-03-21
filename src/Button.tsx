import React from 'react';

type ButtonPropsType = {
    title: string
    onClickHandler: ()=>void
    className?: string

}

const Button = (props: ButtonPropsType) => {
    return (
        <>
            <button className={props.className} onClick={props.onClickHandler}>{props.title}</button>
        </>
    );
};

export default Button;