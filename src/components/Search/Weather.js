import React from "react";
import Button from "../UI/Button";
import Searchbar from "./Searchbar";

const Weather = (props) => {
    return (
        <>
            <Searchbar />
            <Button type="submit">Search</Button>
        </>
    )
}

export default Weather;

