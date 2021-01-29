import React from 'react';

const Employee = ({ employee }) => {
    return (
        <div>
            <div>{employee.name}</div>
            <div>{employee.department}</div>
            <div>{employee.age}</div>
        </div>
    )
}

export default Employee;