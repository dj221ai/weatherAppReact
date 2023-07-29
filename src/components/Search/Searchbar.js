import React, {useState} from "react";
import Button from '../UI/Button'
import './Searchbar.css';


const Searchbar = (props) => {

    const [city, setCity] = useState("");

    const cityHandler = (event) => {
        console.log(event.target.value);
        setCity(event.target.value)
    }
    const submitHandler = (event) => {
        console.log("city is >>>> ", city);
    }


    return (
        <>
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Enter Your City" value={city} onChange={cityHandler}/>
            </div>
                <Button type="submit" onClick={submitHandler}>Search</Button>
        </>
    )
}

export default Searchbar;

