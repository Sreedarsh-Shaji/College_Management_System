import axios from "axios";

class AdminAuthDataService {

    getSystemStatus() {
        let ret = axios.get(`http://localhost:8082/api/v1/admin/return_system_status`);
        return ret;
    }

    adminSeeAllDepartments() {
        let ret = axios.get(`http://localhost:8082/api/v1/admin/return_all_departments`)
        return ret
    }

    adminSeeAllClasses() {
        let ret = axios.get(`http://localhost:8082/api/v1/admin/return_all_classes`)
        return ret
    }

    adminSeeAllStudents() {
        let ret = axios.get(`http://localhost:8082/api/v1/admin/return_all_students`)
        return ret
    }

    addDepartment(department) {
        let data = {
            "id": 0,
            "name": department
        };
        let ret = axios.post(`http://localhost:8082/api/v1/admin/add_department`, data);
        return ret;
    }

    addStudent(inputData) {
        let data = {
            dob: inputData.dob,
            email: inputData.email,
            name: inputData.name,
            password: inputData.dob,
            phone_no: inputData.phoneNo,
            student_id: 0,
            user_name: "Student " + inputData.name
        }

        let ret = axios.post(`http://localhost:8082/api/v1/admin/add-student`, data);
        return ret;

    }

    addTeacher(inputData) {
        let data = {
            department: inputData.dep,
            dob: inputData.dob,
            email: inputData.email,
            name: inputData.name,
            password: inputData.dob,
            phone_no: inputData.phoneNo,
            teacher_id: 0,
            user_name: "Teacher " + inputData.name
        }
        let ret = axios.post(`http://localhost:8082/api/v1/admin/add-teacher`, data);
        return ret;
    }

    addClass(inputData) {
        let data = {
            //name: "", strength: 0, dep: "",
            id: 0,
            department: inputData.dep,
            maxStrength: inputData.strength,
            name: inputData.name,
        }

        let ret = axios.post(`http://localhost:8082/api/v1/admin/add-classes`, data);
        return ret;
    }

    addParent(inputData) {
        let data = {
            /*
            
            {
  "dob": "2021-07-13T18:11:09.650Z",
  "email": "string",
  "name": "string",
  "parent_id": 0,
  "password": "string",
  "phone_no": "string",
  "student": 0,
  "user_name": "string"
}

            */

            student: inputData.dep,
            dob: inputData.dob,
            email: inputData.email,
            name: inputData.name,
            password: inputData.dob,
            phone_no: inputData.phoneNo,
            parent_id: 0,
            user_name: "Parent " + inputData.name

        }

        let ret = axios.post(`http://localhost:8082/api/v1/admin/add-parent`, data);
        return ret;
    }

}

export default new AdminAuthDataService();