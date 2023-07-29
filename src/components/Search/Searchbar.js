import React from "react";
import './Searchbar.css';


const Searchbar = (props) => {
    return (
        <>
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Enter Your City"/>
            </div>
        </>
    )
}

export default Searchbar;

