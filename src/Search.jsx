import React from 'react';
import "./styles.scss";

const Search = (props) => {
    return (
        <div>
            <label className="searchbar" for="search">Search by Name: </label>
            <input className="searchbar" value={props.search} type="text" placeholder="Employee Name..." name="search" onChange={(e) => props.handleSearch(e)}></input>
        </div>
    )
}

export default Search;