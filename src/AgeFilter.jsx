import React from 'react';
import './styles.scss';

const AgeFilter = ({ handleChange }) => {
    return (
        <div className="age-range">
            <div className="age-in">
      <label htmlFor="ageLow">Min. Age</label>
      <input type="number" id="ageLow" name="ageLow" min="1" max="200" onChange={(e) => handleChange(e)}></input>
      </div>
      <div className="age-in">
      <label htmlFor="ageHi">Max Age</label>
      <input type="number" id="ageHi" name="ageHi" min="1" max="200" onChange={(e) => handleChange(e)}></input>
      </div>
        </div>
    )
}

export default AgeFilter;