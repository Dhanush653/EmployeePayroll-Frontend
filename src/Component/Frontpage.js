import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IoSearch } from "react-icons/io5";
// import searchIcon from "../Asserts/search.svg"
import { IoMdAdd } from "react-icons/io";
// import searchIcon from "../Asserts/search.svg";
// import logo from '../Asserts/logo.png';
// import addImage from '../Asserts/add-24px.svg';
// import searchIcon from '../Asserts/search-black.svg';
import './Frontpage.css';
import { Link } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';
import Display from './Display';

export default class Frontpage extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchExpand: false,
      AllEmployeeArray:[],
      employeeArray:[]
    };
  }

  openSearch = () => {
    this.setState({ searchExpand: true });
  };

  componentDidMount(){
    this.getAllEmployee();
  }

  getAllEmployee = () => {
    EmployeeService.getAllEmployees()
    .then((response) =>{
      this.setState({
        AllEmployeeArray: response.data,
        employeeArray: response.data
      });
      console.log(response.data);

    })
  .catch((err) =>{
    alert("Somthing went wrong",err);
  });
};
search = (event) => {
  let searchValue = event.target.value.trim().toLowerCase(); // Trim and convert to lowercase

  let filteredArray = this.state.AllEmployeeArray.filter(employee =>
    employee.name.toLowerCase().includes(searchValue)
  );

  this.setState({ employeeArray: filteredArray });
};


render() {
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
          <div className="search-box" onClick={this.openSearch}>
            <input
            className={"input1 " + (this.state.searchExpand && "input1-expand")}
            onChange={this.search}
            type="text"
            placeholder="Search"
            />
          </div>
        
        </div>  
        <div className='addusericon'>
          <div>
          <Link to = {"/Employeeform"}>
          <button className='addicon'>
            <span className='add'><IoMdAdd /></span>
            <span className='addtext'>Add User</span>
          </button>
          </Link>
          </div>
        
        </div>
      </div>
      <div class="table-main">
        <Display
        employeeArray={this.state.employeeArray}
        getAllEmployee={this.getAllEmployee}
        />  
      </div>
    </div>
    )
  }
}