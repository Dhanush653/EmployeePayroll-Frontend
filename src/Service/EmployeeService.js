import axios from 'axios';
class EmployeeService{
    addEmployee(data){
        return axios.post("http://localhost:8080/employee/add",data)
    }

    getAllEmployees(){
        return axios.get("http://localhost:8080/employees")
    }

    getEmployee(id){
        return axios.get(`http://localhost:8080/employee/${id}`)
    }

    updateEmployee(id,data){
        return axios.put(`http://localhost:8080/employee/update/${id}`,data)
    }
    
    deleteEmployee(id){
        return axios.delete(`http://localhost:8080/employee/delete/${id}`)
    }
}

const employeeServiceInstance = new EmployeeService();
export default employeeServiceInstance;