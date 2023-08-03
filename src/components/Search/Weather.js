import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Cards from "../UI/Cards";

const Weather = (props) => {

    const [gotData, setGotData] = useState(false);
    const [latLonLocation, setLatLonLocation] = useState();
    const [data, setData] = useState();

    // setLatLonLocation(props.cityData1);
    // setData(props.data);
    // console.log("data n citydata >>. ", data, latLonLocation);

    // let 

    const collectCityName = (city) => {
        console.log("collected city is >>>>> ", city);
        props.onSave(city, "yes");
    }
    // console.log("data n citydata >>. ", props.data, props.cityData1);

    // useEffect( () => {
    //     // let data = props.data
    //     // let cityData = props.cityData1
    //     setLatLonLocation(props.cityData1);
    //     setData(props.data);
    //     console.log("data n citydata >>. ", data, latLonLocation);
    // }, [])


    return (
        <>
            <Searchbar onSearch={collectCityName}/>
            <Cards>
                {/* {gotData?<p>{cityData}</p>:<p>Nope</p>} */}
            </Cards>
        </>
    )
}

export default Weather;

