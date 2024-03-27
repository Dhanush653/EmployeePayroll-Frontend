import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import './Frontpage.css';
import { Link } from 'react-router-dom';
export default function Frontpage() {
  return (
    <div className='container'>
      <header className='header'>
        <h4 className='h4'>
          <span className='usericon'><FontAwesomeIcon icon={faUser} /></span>
          <span className='employee'>EMPLOYEE </span>
          <span className='payroll'>PAYROLL</span>
        </h4>
      </header>
      <div className='top'>
        <h4>Employee Details</h4>
        <div className='adduser'>
          <button className='searchicon'><IoSearch /></button>
          <Link to = {"/Adduser"}>
          <button className='addicon'>
            <span className='add'><IoMdAdd /></span>
            <span className='addtext'>Add User</span>
          </button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}
