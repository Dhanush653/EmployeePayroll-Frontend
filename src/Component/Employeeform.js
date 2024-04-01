import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Employeeform.css';
import img1 from '../Asserts/1.jpeg';
import img2 from '../Asserts/2.jpeg';
import img3 from '../Asserts/3.jpeg';
import img4 from '../Asserts/4.png';
import { Link, useParams } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';

export const Employeeform = (props) => {
  let initialValue = {
    id: '',
    name: '',
    allDepartment: ['HR', 'Sales', 'Finance', 'Engineer', 'Others'],
    departmentValue: [],
    gender: '',
    salary: '',
    day: '',
    month: '',
    year: '',
    startDate: '',
    notes: '',
    profileimage: '',
    isUpdate: false,
  };
  const [formValue, setForm] = useState(initialValue);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getDataById(params.id);
    }
}, [params.id]);
  

  const getDataById = (id) => {
    EmployeeService
      .getEmployee(id)
      .then((response) => {
        console.log(response);
        let obj = response.data;
        setData(obj);
      })
      .catch((err) => {
        alert("error in getting the id ",err);
      });
  };
  const setData = (obj) => {
    let array = obj.startdate.split(" ");
    let day = array[0].padStart(2, '0'); 
    setForm({
        ...formValue,
        ...obj,
        id: obj.emp_id,
        name: obj.name,
        departmentValue: obj.department,
        isUpdate: true,
        day: day,
        month: array[1],
        year: array[2],
        notes: obj.notes,
    });
};

  const changeValue = (event) => {
    setForm({ ...formValue, [event.target.name]: event.target.value })
  }

  const onCheckChange = (name) => {
    let index = formValue.departmentValue.indexOf(name);

    let checkArray = [...formValue.departmentValue];
    if (index > -1){
      checkArray.splice(index, 1);
    } 
    else{
      checkArray.push(name);
    }
    setForm({ ...formValue, departmentValue: checkArray }); 
  }

  const getChecked = (name) => {
    return formValue.departmentValue && formValue.departmentValue.includes(name);
  }

  const save = async (event) => {
    event.preventDefault();

    let object = {
      id : formValue.id,
      name: formValue.name,
      department: formValue.departmentValue,
      gender: formValue.gender,
      salary: formValue.salary,
      startdate: `${formValue.day} ${formValue.month} ${formValue.year}`,
      notes: formValue.notes,
      profileimage: formValue.profileimage,
    };

    if (formValue.isUpdate) {
      var answer =  window.confirm("Data once modified cannot be restored");
      if(answer === true){
          EmployeeService.updateEmployee(params.id,object).then((data) => {
            alert("Data updated successfully",data);
          })
          .catch((error) => {
              alert("WARNING Error updating the data",error);
          });
          }else{
              window.location.reload();
          }
    } else {
      EmployeeService.addEmployee(object).then((response) => {
          console.log(response);
          alert("Data Added successfully!!",response)
        })
        .catch(error => {
          console.log(error);
          alert("Error while adding the data!");
        });
  }     
}

  const reset = () => {
    setForm({ ...initialValue, id: formValue.id, isUpdate: formValue.isUpdate });
  };
  return (
    <div className='container'>
      <header className='header'>
        <h4 className='h4'>
          <span className='usericon'><FontAwesomeIcon icon={faUser} /></span>
          <span className='employee'>EMPLOYEE </span>
          <span className='payroll'>PAYROLL</span>
        </h4>
      </header>
      <div className='form'>
        <h3>EMPLOYEE PAYROLL FORM</h3>
        <div className='name'>
        {/* (e) => setForm({ ...formValue, name: e.target.value }) */}
          <label htmlFor="name" className='namelabel'>Name</label>
          {/* (e) => setForm({ ...formValue, name: e.target.value }) */}
          <input type="text" id="name" className='nameinput' name="name" placeholder='Enter Name' value={formValue.name} onChange={changeValue}/>
        </div>
        
        <div className='profile'>
          <label htmlFor="profileImage" className='profilelabel'>Profile Image</label>
          <div className='radiobuttons'>
            <input type="radio" id="profile1" name="profileimage" checked={formValue.profileimage === '../Asserts/1.jpeg'} value="../Asserts/1.jpeg" onChange={changeValue} />
            <label htmlFor="profile1" className='profile-image'><img src={img1} alt="Profile 1" /></label>
            <input type="radio" id="profile2" name="profileimage" checked={formValue.profileimage === '../Asserts/2.jpeg'} value="../Asserts/2.jpeg" onChange={changeValue} />
            <label htmlFor="profile2" className='profile-image'><img src={img2} alt="Profile 2" /></label>
            <input type="radio" id="profile3" name="profileimage" checked={formValue.profileimage === '../Asserts/3.jpeg'} value="../Asserts/3.jpeg" onChange={changeValue} />
            <label htmlFor="profile3" className='profile-image'><img src={img3} alt="Profile 3" /></label>
            <input type="radio" id="profile4" name="profileimage" checked={formValue.profileimage === '../Asserts/4.png'} value="../Asserts/4.png" onChange={changeValue} />
            <label htmlFor="profile4" className='profile-image'><img src={img4} alt="Profile 4" /></label>
          </div>
          <div className='profile-images'>
            <span className='profile-image'></span>
            <span className='profile-image'></span>
            <span className='profile-image'></span>
            <span className='profile-image'></span>
          </div>
        </div>
      
        <div>
          <label htmlFor='gender' className='genderlabel'>Gender</label>
          <div className='genderradiobutton'>
            <input type='radio' id='male' checked={formValue.gender === 'male'} name='gender' onChange={changeValue} value="male"/>
            <label htmlFor='male'>Male</label>
            <input type='radio' id='female' checked={formValue.gender === 'female'} name='gender' onChange={changeValue} value="female"/>
            <label htmlFor='female'>Female</label>
          </div>
        </div>
        <div className='row-content'>
          <label className="departmentlabel" htmlFor="department">Department</label>
          <div>
            {formValue.allDepartment.map(item => (
              <span key={item}>
                <input className="departmentcheckbox" type="checkbox" onChange={() => onCheckChange(item)} name={item}
                  checked={getChecked(item)} value={item} />
                <label className="text" htmlFor={item}>{item}</label>
              </span>
            ))}
          </div>
        </div>
        <div>
             <label htmlFor='salary' className='salarylabel'>Salary</label>
             {/* <select id='salary' className='salarydropdown' defaultValue="" onChange={changeValue} value={formValue.salary}> */}
             <select id='salary' className='salarydropdown' defaultValue="" onChange={changeValue} value={formValue.salary} name="salary">
               <option value='' disabled>Select Salary</option>
               <option value='300000' >3 lakhs</option>
               <option value='400000' >4 lakhs</option>
               <option value='500000' >5 lakhs</option>
               <option value='600000' >6 lakhs</option>
             </select>
            </div>
            <div>
             <label htmlFor='startDate' className='startdatelabel'>Start Date</label>
             <div className='date-dropdowns'>
             {/* (e) => setForm({ ...formValue, day: e.target.value }) */}
               <select value={formValue.day} id='day' className='daydropdown' defaultValue= "" onChange={changeValue} name='day'>
                 <option value='' disabled defaultValue>Day</option>
                 {Array.from({ length: 31 }, (_, index) => (
                 <option key={index + 1} value={index + 1}>{index + 1}</option>
                 ))}
               </select>
               <select value={formValue.month} id='month' className='monthdropdown' defaultValue= "" onChange={changeValue} name='month' >
                 <option value='' disabled defaultValue>Month</option>
                 {Array.from({ length: 12 }, (_, index) => (
                 <option key={index + 1} value={index + 1}>{index + 1}</option>
                 ))}
               </select>
               <select value={formValue.year} id='year' className='yeardropdown' defaultValue= "" onChange={changeValue} name='year' >
                 <option value='' disabled defaultValue>Year</option>
                  {Array.from({ length: 25 }, (_, index) => (
                  <option key={2000 + index} value={2000 + index}>{2000 + index}</option>
                  ))}
               </select>
             </div>
           </div>
           <div>
             <label htmlFor='notes' className='noteslabel'>Notes</label>
             {/* (e) => setForm({ ...formValue, notes: e.target.value }) */}
             <textarea id='notes' className='notestextarea' placeholder='Enter notes here' value={formValue.notes} onChange={changeValue} name="notes"></textarea>
           </div>
        <div className='buttons'>
          <Link to = {"/"}>
          <button className='cancel-button'>Cancel</button>
          </Link>
          <div className='submit-reset-buttons'>
            <button type = "submit" className='submit-button' onClick={save} >Submit</button>
            <button className='reset-button' onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};