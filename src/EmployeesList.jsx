import React from 'react';
import Employee from './Employee';
import './styles.scss';

const EmployeesList = ({ employees, search, dept, ageLow, ageHi }) => {
    if (search !== null) {
      var searchedList = employees.filter((e) => {
        if (e.name.toLowerCase().includes(search.toLowerCase())) {
          return e;
        }
      });
    }
    if (dept !== '') {
        var deptList = employees.filter((e) => {
            if (e.department === dept) { return e; }
        });
    }
    if (ageLow > 0 || ageHi < 1000) {
        var ageList = employees.filter((e) => {
            if (e.age >= ageLow && e.age <= ageHi) { return e; }
        });
    }
    return (
        <div className="list-container">
            <div className="eList">
            <h3>All Employees:</h3>
       {employees.map((employee, i) => {
            return (<Employee key={i} employee={employee}/>);
        })}
        </div>
        {searchedList && 
        <div className="results">
            <h3>Search Results:</h3>
        {searchedList.map((employee, i) => {
            return (<Employee key={i} employee={employee}/>);
        })}
        </div>
        }
        {ageList && 
        <div className="age-results">
            <h3>Ages {ageLow} to {ageHi}:</h3>
        {ageList.map((employee, i) => {
            return (<Employee key={i} employee={employee}/>);
        })}
        </div>
        }
        {dept !== null && 
        <div className="dept-results">
            <h3>{dept} department:</h3>
        {deptList.map((employee, i) => {
            return (<Employee key={i} employee={employee}/>);
        })}
        </div>
        }
        </div>
    );
};

export default EmployeesList;