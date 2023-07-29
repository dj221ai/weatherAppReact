import React from "react";
import styles from './Cards.module.css';


const Cards = (props) => {
    return (
        <>
            <div className={`${styles.card} ${props.className}`}>
                {props.children}
            </div>
        </>
    )
}

export default Cards;
