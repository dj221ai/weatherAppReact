import React from "react";
import Searchbar from "./Searchbar";
import Cards from "../UI/Cards";

const Weather = (props) => {
    return (
        <>
            <Searchbar />
            <Cards>
                Temp 30
            </Cards>
        </>
    )
}

export default Weather;

