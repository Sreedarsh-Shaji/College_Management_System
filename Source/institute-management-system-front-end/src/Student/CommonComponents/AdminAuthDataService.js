import axios from "axios";
import Cookies from 'universal-cookie';


class AdminAuthDataService {

    getSystemStatus() {
        let ret = axios.put(`http://localhost:8082/api/v1/admin/return_system_status`);
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

    adminSeeAllSessions() {
        let ret = axios.get(`http://localhost:8082/api/v1/admin/see_all_sessions`)
        return ret
    }

    adminSeeAllExams() {
        let ret = axios.get(`http://localhost:8082/api/v1/admin/see_all_exams`)
        return ret
    }
    
    adminSeeAllAssignments() {
        let ret = axios.get(`http://localhost:8082/api/v1/admin/see_all_assignments`)
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

    /* Teacher functionalites */

    addSesson(inputData) {

        var result           = '';
        var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for ( var i = 0; i < characters.length; i++ ) { result += characters.charAt(Math.floor(Math.random() * charactersLength));}

        const cookies = new Cookies();
        let teacher_id = cookies.get('teacher-id').teacher_id

        let data = {
           
                cls: inputData.classname,
                period: inputData.period,
                sessionId: 0,
                teacher: teacher_id,
                time: inputData.time,
                urlToSession: "https://demos.openvidu.io/openvidu-call/#/" + result,

        }

        let ret = axios.post(`http://localhost:8082/api/v1/teacher/add_session`, data);
        return ret;
    }

    addAssignment(inputData)
    {
        const cookies = new Cookies();
        let teacher_id = cookies.get('teacher-id').teacher_id
        
        let data = {
            classId: 0,
            description: inputData.description,
            end: inputData.start,
            id: 0,
            open: true,
            session: 0,
            start: inputData.end,
            subject: 0,
            teacher: teacher_id,
            title: inputData.name,
          }

        let ret = axios.post(`http://localhost:8082/api/v1/teacher/add_assignment`, data);
        return ret;
    }

    addExam(inputData)
    {
        const cookies = new Cookies();
        let teacher_id = cookies.get('teacher-id').teacher_id
        
        let data = {
            
                endDate: "2021-07-13T22:58:45.702Z",
                id: 0,
                name: inputData.name,
                noOfTests: 0,
                stDate: inputData.date,
            
          }

        let ret = axios.post(`http://localhost:8082/api/v1/teacher/add_exam`, data);
        return ret;
    }

    addAttendance(sessionId,studentId)
    {
       
        let ret = axios.post(`http://localhost:8082/api/v1/admin/add_attendance/${studentId}/${sessionId}`);
        return ret;
       
    }

}

export default new AdminAuthDataService();