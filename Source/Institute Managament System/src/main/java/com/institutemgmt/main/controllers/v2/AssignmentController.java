package com.institutemgmt.main.controllers.v2;

import com.institutemgmt.main.entites.Classes;
import com.institutemgmt.main.services.ClassService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "api/v2/assignment")
@Api("Handles the class details")
public class AssignmentController {

    @Autowired
    ClassService service;

    @RequestMapping(method = RequestMethod.POST , value = "/add")
    @ApiOperation(value ="Adds the class detail to the system")
    public boolean addClasses(@RequestBody Classes classes)
    {
        service.addClass(classes);
        return true;
    }

    @RequestMapping(method = RequestMethod.POST,value = "/add/{id}")
    @ApiOperation("Gets a teacher with particular id")
    public Optional<Classes> getAClass(@PathVariable int id)
    {
        return service.getAClassById(id);
    }

    @RequestMapping(method = RequestMethod.GET,value = "/getAll")
    @ApiOperation("Returns all the class in the system")
    public List getAllTeachers()
    {
        return service.getAllClasses();
    }

    @RequestMapping(method = RequestMethod.DELETE,value = "/delete/{id}")
    @ApiOperation("Returns all the teacher in the system")
    public boolean deleteTeacher(@PathVariable int id)
    {
        service.deleteAClassesById(id);
        return true;
    }

    @RequestMapping(method = RequestMethod.PUT,value = "/update")
    @ApiOperation("Returns all the teacher in the system")
    public String updateTeacher(@RequestBody Classes classes)
    {
        service.updateClasses(classes);
        return null;
    }

}