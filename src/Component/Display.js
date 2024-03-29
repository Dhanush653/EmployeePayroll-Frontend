import React from 'react';
import deleteIcon from '../Asserts/delete.svg';
import editIcon from '../Asserts/create.svg';
// import profile1 from '../Asserts/1.jpeg';
// import profile2 from '../Asserts/2.jpeg'
// import profile3 from '../Asserts/3.jpeg'
// import profile4 from '../Asserts/4.png'
import './Display.css';
import EmployeeService from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const Display = (props) => {
    const navigate = useNavigate();

    const update = (employeeId) => {
       
        navigate(`update/${employeeId}`);
   
};

const remove = (employeeId) => {
    console.log(employeeId);
    var answer = window.confirm("Data once deleted cannot be restored!! Do you wish to continue ?");
        if(answer === true){
            EmployeeService
                .deleteEmployee(employeeId)
                    .then((data) => {
              alert("Data deleted successfully!!",data);
              window.location.reload();
              props.getAllEmployees();       
            })
      .catch((error) => {
        alert("Something Went Wrong!",error);
      });
    }else{
      alert("Data Not Deleted")
    }
  };

  return (
  <>
    <table id="display" className="display">
      <tbody>
            
        <tr>
          <th>Profile Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Departments</th>
          <th>Salary</th>
          <th>Start Date</th>
          <th>Notes</th>
          <th>Actions</th>
        </tr>
        {
            props.employeeArray &&
              props.employeeArray.map((employees,index) => (
                <tr key={`${index}`}>
                  <td><img className="profile" 
                    src={
                      employees.profileimage 
                    }
                    alt=""
                    />
                  </td>
                 
                  <td>{employees.name}</td>
                  <td className="gender">{employees.gender}</td>
                  <td>
                    {employees.department &&
                      employees.department.map((department) => (
                        <div>{department}</div>
                      ))}
                  </td>
                  <td> ₹{employees.salary}</td>
                  <td>{employees.startdate}</td>
                  <td>{employees.notes}</td>
                  <td>
                    <img onClick={() => remove(employees.emp_id)}
                    src={deleteIcon}
                    alt="delete" />
                  <img onClick={() => update(employees.emp_id)}
                    src={editIcon}
                    alt="edit" />
                  </td>
                </tr>
              ))
          }
        </tbody>
    </table>
    </>
  );
};

export default (Display);