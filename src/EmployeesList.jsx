import React from 'react';
import Employee from './Employee';

const EmployeesList = ({ employees }) => {
    return (
        <div>
       {employees.map((employee, i) => {
            return (<Employee key={i} employee={employee}/>);
        })}
        </div>
    )
};

export default EmployeesList;