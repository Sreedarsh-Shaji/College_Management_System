package com.institutemgmt.main.controllers;

import com.institutemgmt.main.entites.Admin;
import com.institutemgmt.main.services.AdminService;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@Api(description = "Sample hello world application")
@RequestMapping(value = "api/v1")
public class AdminController {

    @Autowired
    private AdminService service;

    @RequestMapping(method = RequestMethod.GET,value = "/hello")
    public String hello()
    {
        return "Welcome to the Institute management system1233!!!";
    }

    @RequestMapping(method = RequestMethod.GET,value = "/admin/all")
    public List allAdmins()
    {
        return service.getAllAdmin();
    }

    @RequestMapping(method = RequestMethod.GET,value = "/admin/login/{username}/{password}")
    public boolean adminLogin(@PathVariable("username") String username ,@PathVariable("password") String password){
        List<Admin> results = null;

        results = service.getByUserPwd(username, password);
       if(results == null ) {service.getByMailPwd(username, password);}

        return results.size()<=0?false:true;
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


}
