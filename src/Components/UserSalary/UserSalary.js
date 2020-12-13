import React from 'react';
import './UserSalary.css'


const UserSalary = (props) => {
    const users = props.selectedUsers
    const totalSalary = users.reduce( (total,user) => total+user.salary, 0)
    return (
        <div className = "salary">
           <h2 className = 'a'>Users Selected: {users.length}</h2>
           <h3 className = 'a'>Total salary: ${totalSalary}</h3>
        </div>
    );
};

export default UserSalary;