import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import UserInfo from '../UserInfo/UserInfo';
import UserSalary from '../UserSalary/UserSalary';
import './Users.css'

const Users = () => {
    const[users,setUsers] = useState([])
    useEffect(() => {
        setUsers(fakeData)
    },[])

    const[selectedUsers,setSelectedUsers] = useState([])

    const handleAddSalary = (salary) => {
        //console.log('Salary Added', salary)
        const newUsers = [...selectedUsers, salary]
        setSelectedUsers(newUsers)
    }
    return (
        <div className = 'container'>
             

            <div className = 'names'>
            {
               users.map(user => <UserInfo userr = {user} handleAddSalary = {handleAddSalary}></UserInfo>)
            }
            </div>

            <div className = 'cart-container'>
               
                <UserSalary selectedUsers = {selectedUsers}></UserSalary>
            </div>
           
        </div>
    );
};

export default Users;