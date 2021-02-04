import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1/admin/all";
const ADD_TEACHER_API = "http://localhost:8082/api/v1/teacher/add";

class EmployeeService 
{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createTeacher(teacher)
    {
        //Send the post data to the rest api
        return axios.post(ADD_TEACHER_API, teacher);
    }

}

export default new EmployeeService()