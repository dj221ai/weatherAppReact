import React, {useState} from "react";
import Button from '../UI/Button'
import './Searchbar.css';


const Searchbar = (props) => {

    const [city, setCity] = useState("");

    const cityHandler = (event) => {
        setCity(event.target.value)
    }
    const getCityName = (event) => {
        props.onSearch(city);
    }


    return (
        <>
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Enter Your City" value={city} onChange={cityHandler}/>
            </div>
                <Button type="submit" onClick={getCityName}>Search</Button>
        </>
    )
}

export default Searchbar;

