import axios from 'axios';
class EmployeeService{
    addEmployee(data){
        return axios.post("http://localhost:8080/employee/add",data)
    }
}

const employeeServiceInstance = new EmployeeService();
export default employeeServiceInstance;