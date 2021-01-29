import React from 'react';

const Employee = ({ employee }) => {
    
    return (
        <div>
        <div className="emp-card">
            <div style={{fontSize: "1.5rem"}}>{employee.name}</div>
            <div>Department: {employee.department}</div>
            <div>Age: {employee.age}</div>
        </div>
        </div>
    )
}

export default Employee;