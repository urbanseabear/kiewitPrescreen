import React from 'react';
import './styles.scss';

const DeptFilter = ({ handleClick }) => {
    return (
        <div className="dropdown">
            <button className="filter-button">Department Filter</button>
            <div className="dropdown-content">
                <div className="filter" id="Film" onClick={(e) => handleClick(e)}>Film</div>
                <div className="filter" id="Sports" onClick={(e) => handleClick(e)}>Sports</div>
                <div className="filter" id="Music" onClick={(e) => handleClick(e)}>Music</div>
            </div>
        </div>
    )
}

export default DeptFilter;