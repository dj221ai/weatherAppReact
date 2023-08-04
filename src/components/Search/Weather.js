import React from "react";
import Searchbar from "./Searchbar";
import Cards from "../UI/Cards";

const Weather = (props) => {
    const collectCityName = (city) => {
        props.onSave(city);
    }

    return (
        <>
            <Searchbar onSearch={collectCityName}/>
            <Cards>
                <div>
                   <p>City - {props.data?.location?.name}</p>
                   <p>Region - {props.data?.location?.region}</p>
                   <p>Country - {props.data?.location?.country}</p>
                   <p>Temperature - {props.data?.current?.temp_c}°C</p>
                   <p>Feels like - {props.data?.current?.feelslike_c}°C</p>
                    <p>{props.data?.current?.condition?.text}</p> <img src={props.data?.current?.condition?.icon} alt=""/>
                </div>
            </Cards>
        </>
    )
}

export default Weather;

