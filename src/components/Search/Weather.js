import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Cards from "../UI/Cards";

const Weather = (props) => {
    const collectCityName = (city) => {
        console.log("collected city is >>>>> ", city);
        props.onSave(city);
    }

    return (
        <>
            <Searchbar onSearch={collectCityName}/>
            <Cards>
                <div>
                   <p>City -{props.data?.location?.name}</p>
                   <p>Temperature - {props.data?.current?.temp_c}°C</p>
                    <p>{props.data?.current?.condition?.text}</p> <img src={props.data?.current?.condition?.icon}/>
                </div>
            </Cards>
        </>
    )
}

export default Weather;

