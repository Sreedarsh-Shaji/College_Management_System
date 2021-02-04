package com.institutemgmt.main.controllers;

import com.institutemgmt.main.entites.Teacher;
import com.institutemgmt.main.services.TeacherService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@Slf4j
@RequestMapping(value = "api/v1/teacher")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TeacherController {

    @Autowired
    TeacherService service;

    @RequestMapping(method = RequestMethod.POST,value = "/add")
    public boolean addTeacher(@RequestBody Teacher teacher)
    {
        service.addTeacher(teacher);
        return true;
    }

    @RequestMapping(method = RequestMethod.POST,value = "/add/{id}")
    @ApiOperation("Gets a teacher with particular id")
    public Optional<Teacher> getATeacher(@PathVariable int id)
    {
        return service.getATeacherById(id);
    }

    @RequestMapping(method = RequestMethod.GET,value = "/getAll")
    @ApiOperation("Returns all the teacher in the system")
    public List getAllTeachers()
    {
        return service.getAllTeachers();
    }

    @RequestMapping(method = RequestMethod.DELETE,value = "/delete/{id}")
    @ApiOperation("Returns all the teacher in the system")
    public boolean deleteTeacher(@PathVariable int id)
    {
        service.deleteATeacherById(id);
        return true;
    }

    @RequestMapping(method = RequestMethod.PUT,value = "/update")
    public String updateTeacher(@RequestBody Teacher teacher)
    {
        service.updateTeacher(teacher);
        return null;
    }

}
