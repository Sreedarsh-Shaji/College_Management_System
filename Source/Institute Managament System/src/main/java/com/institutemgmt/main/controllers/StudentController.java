package com.institutemgmt.main.controllers;

import com.institutemgmt.main.DTO.Teacher;
import com.institutemgmt.main.services.StudentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Slf4j
@Controller
@Api("Student APIs")
@RequestMapping("/api/v1/student")
public class StudentController {

    @Autowired
    private StudentService service;

    @ApiOperation("Adds the student into the system")
    @RequestMapping(method = RequestMethod.POST,value = "/add")
    public boolean addStudent(@RequestBody Teacher teacher)
    {
        return true;
    }

    public List getAStudent()
    {
        return null;
    }

    public List getAllStudents()
    {
        return null;
    }

    public String deleteStudent()
    {
        return null;
    }

    public String updateStudent()
    {
        return null;
    }


}
