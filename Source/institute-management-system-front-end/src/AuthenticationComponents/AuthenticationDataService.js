import axios from "axios";

class AuthenticationDataService{
   
    /* ADMIN APIs */

    adminLogin(username,password){
        let ret = axios.get(`http://localhost:8082/api/v1/admin/admin/login/${username}/${password}`);
        return ret;
    } 

    adminSeeAllDepartments()
    {
        let ret = axios.get(`http://localhost:8082/api/v1/admin/return_all_departments`)
        return ret
    }

    getAllusers()
    {
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllUser`)
        return users
    }

    getAllAgencies()
    {
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllAgencies`)
        return users
    }
    getAllOfficers(){
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllOffices`)
        return users
    }
    getAllTrips(){
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllTrips`)
        return users
    }
    getAllVehicles(){
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllVehicles`)
        return users
    }

    /* Teacher APIs */

    teacherLogin(username,password){
        let ret = axios.get(`http://localhost:8082/api/v1/teacher/teacher/login/${username}/${password}`);
        return ret;
    } 


    /* Student APIs */

    studentLogin(username,password){
        let ret = axios.get(`http://localhost:8082/api/v1/admin/student_login/${username}/${password}`);
        return ret;
    } 

}

export default new AuthenticationDataService();