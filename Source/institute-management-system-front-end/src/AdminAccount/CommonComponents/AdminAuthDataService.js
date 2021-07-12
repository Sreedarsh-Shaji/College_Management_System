import axios from "axios";

class AdminAuthDataService{
   
    getSystemStatus(){
        let ret = axios.put(`http://localhost:8082/api/v1/admin/return_system_status`);
        return ret;
    } 

    getAllDepartments(){
        let ret = axios.put(`http://localhost:8082/api/v1/admin/return_all_departments`);
        return ret;
    } 

    addDepartment(department){
        let data ={
            "id": 0,
            "name": department
          };
        let ret = axios.post(`http://localhost:8082/api/v1/admin/add_department`,data);
        return ret;
    } 


}

export default new AdminAuthDataService();