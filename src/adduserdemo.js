// import React,{useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import './Adduser.css';
// import img1 from './Asserts/1.jpeg';
// import img2 from './Asserts/2.jpeg';
// import img3 from './Asserts/3.jpeg';
// import img4 from './Asserts/4.png';
// // import EmployeeService from '../service/EmployeeService'

// export default function Adduser() {

//   const [name, setName] = useState('');
//   const [profileimage, setSelectedProfile] = useState('');
//   const [gender, setSelectedGender] = useState('');
//   const [department, setDepartment] = useState([]);
//   const [salary, setSalary] = useState('');
//   const [day, setDay] = useState('');
//   const [month, setMonth] = useState('');
//   const [year, setYear] = useState('');
//   const [notes, setNotes] = useState('');

//   const handleName = (event) => {
//     setName(event.target.value);
//   };
//   const handleselectedProfile = (event) => {
//     setSelectedProfile(event.target.id);
//   };
//   const handleselectGender = (event) => {
//     setSelectedGender(event.target.id);
//   };
//   const handledepartment = (event) =>{
//     const selectedDepartment = event.target.id;
//     if (event.target.checked) {
//       setDepartment((prevDepartments) => [...prevDepartments, selectedDepartment]);
//      } 
//   };
//   const handlesalary = (event) =>{
//     setSalary(event.target.value);
//   };
//   const handleStartDateChange = () => {
//     const selectedday = document.getElementById('day').value;
//     const selectedmonth = document.getElementById('month').value;
//     const selectedyear = document.getElementById('year').value;
//     setDay(selectedday);
//     setMonth(selectedmonth);
//     setYear(selectedyear);
//   };
//   const handlenotes = (event) =>{
//     setNotes(event.target.value);
//   }
  
//   const handleSubmit = () => {
//     console.log(name);
//     console.log(profileimage);
//     console.log(gender);
//     console.log(department);
//     console.log(salary);
//     console.log(`${day}-${month}-${year}`);
//     console.log(notes);
//   };

//   const handleReset = () => {
//     setName('');
//     setSelectedProfile('');
//     setDepartment([]);
//     setSalary('');
//     setDay('');
//     setMonth('');
//     setYear('');
//     setNotes('');
//   };

//   return (
//     <div className='container'>
//         <header className='header'>
//             <h4 className='h4'>
//                 <span className='usericon'><FontAwesomeIcon icon={faUser} /></span>
//                 <span className='employee'>EMPLOYEE </span>
//                 <span className='payroll'>PAYROLL</span>
//             </h4>
//           </header>  
//         <div className='form'>
//           <h3>EMPLOYEE PAYROLL FORM</h3>
//           <div className='name'>
//             <label htmlFor="name" className='namelabel'>Name</label>
//             <input type="text" id="name" className='nameinput' placeholder='Enter Name' value={name} onChange={handleName}/>
//           </div>
//             <div className='profile'>
//               <label htmlFor="profileImage" className='profilelabel'>Profile Image</label>
//               <div className='radiobuttons'>
//                 <input type="radio" id="profile1" name="profileImage" onChange={handleselectedProfile}/>
//                 <label htmlFor="profile1" className='profile-image'><img src={img1} alt="Profile 1" /></label>
//                 <input type="radio" id="profile2" name="profileImage" onChange={handleselectedProfile}/>
//                 <label htmlFor="profile2" className='profile-image'><img src={img2} alt="Profile 2" /></label>
//                 <input type="radio" id="profile3" name="profileImage" onChange={handleselectedProfile}/>
//                 <label htmlFor="profile3" className='profile-image'><img src={img3} alt="Profile 3" /></label>
//                 <input type="radio" id="profile4" name="profileImage" onChange={handleselectedProfile}/>
//                 <label htmlFor="profile4" className='profile-image'><img src={img4} alt="Profile 4" /></label>
//               </div>
//               <div className='profile-images'>
//                 <span className='profile-image'></span>
//                 <span className='profile-image'></span>
//                 <span className='profile-image'></span>
//                 <span className='profile-image'></span>
//               </div>
//             </div>
//             <div>
//               <label htmlFor='gender' className='genderlabel'>Gender</label>
//               <div className='genderradiobutton'>
//                 <input type='radio' id='male' name='gender' onChange={handleselectGender}/>
//                 <label htmlFor='male'>Male</label>
//                 <input type='radio' id='female' name='gender' onChange={handleselectGender}/>
//                 <label htmlFor='female'>Female</label>
//               </div>
//             </div>
//             <div>
//               <label htmlFor='department' className='departmentlabel'>Department</label>
//               <div className='departmentcheckbox'>
//                 <input type='checkbox' id='hr' name='department' onChange={handledepartment}/>
//                 <label htmlFor='hr'>HR</label>
//                 <input type='checkbox' id='sales' name='department' onChange={handledepartment}/>
//                 <label htmlFor='sales'>Sales</label>
//                 <input type='checkbox' id='finance' name='department' onChange={handledepartment}/>
//                 <label htmlFor='finance'>Finance</label>
//                 <input type='checkbox' id='engineer' name='department' onChange={handledepartment}/>
//                 <label htmlFor='engineer'>Engineer</label>
//                 <input type='checkbox' id='others' name='department' onChange={handledepartment}/>
//                 <label htmlFor='others'>Others</label>
//               </div>
//            </div>
//            <div>
//             <label htmlFor='salary' className='salarylabel'>Salary</label>
//             <select id='salary' className='salarydropdown' defaultValue="" onChange={handlesalary}>
//               <option value='' disabled>Select Salary</option>
//               <option value='300000' >3 lakhs</option>
//               <option value='400000' >4 lakhs</option>
//               <option value='500000' >5 lakhs</option>
//               <option value='500000' >6 lakhs</option>
//             </select>
//            </div>
//            <div>
//             <label htmlFor='startDate' className='startdatelabel'>Start Date</label>
//             <div className='date-dropdowns'>
//               <select id='day' className='daydropdown' defaultValue= "" onChange={handleStartDateChange}>
//                 <option value='' disabled defaultValue>Day</option>
//                 {Array.from({ length: 31 }, (_, index) => (
//                 <option key={index + 1} value={index + 1}>{index + 1}</option>
//                 ))}
//               </select>
//               <select id='month' className='monthdropdown' defaultValue= "" onChange={handleStartDateChange}>
//                 <option value='' disabled defaultValue>Month</option>
//                 {Array.from({ length: 12 }, (_, index) => (
//                 <option key={index + 1} value={index + 1}>{index + 1}</option>
//                 ))}
//               </select>
//               <select id='year' className='yeardropdown' defaultValue= "" onChange={handleStartDateChange}>
//                 <option value='' disabled defaultValue>Year</option>
//                  {Array.from({ length: 25 }, (_, index) => (
//                  <option key={2000 + index} value={2000 + index}>{2000 + index}</option>
//                  ))}
//               </select>
//             </div>
//           </div>
//           <div>
//             <label htmlFor='notes' className='noteslabel'>Notes</label>
//             <textarea id='notes' className='notestextarea' placeholder='Enter notes here' value={notes} onChange={handlenotes}></textarea>
//           </div>
//           <div className='buttons'>
//             <button className='cancel-button'>Cancel</button>
//             <div className='submit-reset-buttons'>
//               <button className='submit-button' onClick={handleSubmit} >Submit</button>
//               <button className='reset-button' onClick={handleReset}>Reset</button>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }
