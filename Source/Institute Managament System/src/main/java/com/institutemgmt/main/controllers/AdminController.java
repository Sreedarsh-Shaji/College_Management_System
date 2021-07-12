package com.institutemgmt.main.controllers;

import com.institutemgmt.main.DAO.Message;
import com.institutemgmt.main.DTO.Admin;
import com.institutemgmt.main.DTO.Department;
import com.institutemgmt.main.services.AdminService;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.institutemgmt.main.DAO.SystemStatus;

@Slf4j
@RestController
@Api("Admin controller")
@RequestMapping(value = "api/v1/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService service;

    @RequestMapping(method = RequestMethod.GET,value = "/hello")
    public String hello()
    {
        return "Welcome to the Institute management system!!!";
    }

    @RequestMapping(method = RequestMethod.GET,value = "/all")
    public List allAdmins()
    {
        return service.getAllAdmin();
    }

  @RequestMapping(method = RequestMethod.GET,value = "/admin/login/{username}/{password}")
    public String adminLogin(@PathVariable("username") String username,@PathVariable("password") String password){
        List<Admin> results = null;

        results = service.getByUserPwd(username, password);
       if(results == null ) {service.getByMailPwd(username, password);}

        return results.size()<=0?"false":"true";
    }

    @RequestMapping(method = RequestMethod.PUT,value = "/admin/updatepassword/{mail}/{password}")
    public boolean updateAdminPassword(@PathVariable("mail") String mail , @PathVariable("password") String password){
        return service.updatePassword(mail,password);
    }

    @RequestMapping(method = RequestMethod.PUT,value = "/admin/resetpass/{mail}")
    public void resetAdminPassword(@PathVariable("mail") String mail)
    {
        log.info("Admin password reset");
        service.setPasswordResetLink();
    }

    @RequestMapping(method = RequestMethod.PUT,value = "/return_system_status")
    public SystemStatus getSystemStatus()
    {
        return  service.returnSystemStatus();
    }

    @RequestMapping(method = RequestMethod.GET,value = "/return_all_departments")
    public List<?> getAllDepartments()
    {
        return  service.getAllDepartment();
    }

    @RequestMapping(method = RequestMethod.POST,value = "/add_department")
    public Message addDepartment(@RequestBody Department department)
    {
        service.addDepartment(department);
        Message temp = (new Message());
        temp.setMessageContent("Successfully inserted");
        return temp;
    }
}
