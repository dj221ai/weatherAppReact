import React from "react";
import Searchbar from "./Searchbar";
import Cards from "../UI/Cards";

const Weather = (props) => {

    const collectCityName = (city) => {
        console.log("collected city is >>>>> ", city);
        props.onSave(city, "yes");
    }

    return (
        <>
            <Searchbar onSearch={collectCityName}/>
            <Cards>

            </Cards>
        </>
    )
}

export default Weather;

