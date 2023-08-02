import React from "react";
import Searchbar from "./Searchbar";
import Cards from "../UI/Cards";

const Weather = (props) => {

    const collectCityName = (city) => {
        console.log("collected city is >>>>> ", city);
        props.onSave(city, "yes");
    }
    // console.log("data n citydata >>. ", props.data, props.cityData1);
    let data = props.data
    let cityData = props.cityData1
    console.log("data n citydata >>. ", data, cityData);


    return (
        <>
            <Searchbar onSearch={collectCityName}/>
            <Cards>
                {/* <p>{cityData.location.name}</p> */}
            </Cards>
        </>
    )
}

export default Weather;

