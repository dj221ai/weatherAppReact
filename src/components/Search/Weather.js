import React from "react";
import Button from "../UI/Button";
import Searchbar from "./Searchbar";
import Cards from "../UI/Cards";

const Weather = (props) => {
    return (
        <>
            <Searchbar />
            <Button type="submit">Search</Button>
            <Cards>
                Temp 30
            </Cards>
        </>
    )
}

export default Weather;

