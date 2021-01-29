import React from 'react';
import Employee from './Employee';
import './styles.scss';

const EmployeesList = ({ employees, search }) => {
   if (search === null) {
    return (
        <div className="list-container">
            <div className="eList">
       {employees.map((employee, i) => {
            return (<Employee key={i} employee={employee}/>);
        })}
        </div>
        
        </div>
    )
   } else {
    var searchedList = employees.filter((e) => {
        if (e.name.toLowerCase().includes(search.toLowerCase())) {
            return e;
        }
    });
    return (
        <div className="list-container">
            <div className="eList">
       {employees.map((employee, i) => {
            return (<Employee key={i} employee={employee}/>);
        })}
        </div>
        <div className="results">
            <h3>Search Results:</h3>
        {searchedList.map((employee, i) => {
            return (<Employee key={i} employee={employee}/>);
        })}
        </div>
        </div>
    ) 
   }
    
};

export default EmployeesList;