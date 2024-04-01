// import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { IoSearch } from "react-icons/io5";
// // import searchIcon from "../Asserts/search.svg"
// import { IoMdAdd } from "react-icons/io";
// // import searchIcon from "../Asserts/search.svg";
// // import logo from '../Asserts/logo.png';
// // import addImage from '../Asserts/add-24px.svg';
// // import searchIcon from '../Asserts/search-black.svg';
// import './Frontpage.css';
// import { Link } from 'react-router-dom';
// import EmployeeService from '../Service/EmployeeService';
// import Display from './Display';

export default class Frontpage extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchExpand: false,
      AllEmployeeArray:[]
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
        AllEmployeeArray: response.data
      });
      console.log(response.data);

    })
  .catch((err) =>{
    alert("Somthing went wrong",err);
  });
};

search = (event) => {
  let search = event.target.value;
  
  this.setState({ employeeArray: this.state.AllEmployeeArray });
  let empArray = this.state.AllEmployeeArray;
  if (search.trim().length > 0)
    empArray = empArray.filter(element =>
        element.name.toLowerCase().indexOf(search.toLowerCase())>-1
    );
  
  this.setState({ employeeArray: empArray });
};

// search = (event) => {
//   let search = event.target.value.trim().toLowerCase(); // Trim and convert to lowercase
//   let empArray = this.state.AllEmployeeArray;

//   if (search.length > 0) {
//     empArray = empArray.filter(element =>
//       element.name.toLowerCase().includes(search)
//     );
//   }

//   this.setState({ employeeArray: empArray });
// };


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
        employeeArray={this.state.AllEmployeeArray}
        getAllEmployee={this.getAllEmployee}
        />  
      </div>
    </div>
    )
  }
}