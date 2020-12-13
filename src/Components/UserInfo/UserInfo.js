import React from 'react';
import './UserInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const UserInfo = (props) => {
    const{name,email,image,salary} = props.userr
    //console.log(props.userr.name)
    
    return (
        <div className = 'userInfo'>
            <div >
                <img src={image} alt="" srcset=""/>
            </div>

            <div>
            <h3 className = "name">{name}</h3>
            <br/>
            <h4 className = "email">Email: {email}</h4>
            <br/>
            <br/>
            <h5 className = "email">Salary:${salary}</h5>
            <button className = "user-button" 
                
                    onClick = {() => props.handleAddSalary(props.userr)}> 
                    <FontAwesomeIcon icon = {faUser} />
                     
                     Add User
            </button>
            </div>
        </div>
    );
};

export default UserInfo;