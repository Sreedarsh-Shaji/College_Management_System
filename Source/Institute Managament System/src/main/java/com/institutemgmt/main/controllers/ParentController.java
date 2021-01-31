package com.institutemgmt.main.controllers;

import com.institutemgmt.main.entites.Teacher;
import com.institutemgmt.main.services.ParentService;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Api("handles the parent details")
@Slf4j
@RequestMapping(path = "api/v1/parent/")
public class ParentController {

    @Autowired
    private ParentService service;

    @RequestMapping(method = RequestMethod.POST,value = "/add")
    public boolean addParent(@RequestBody Teacher teacher)
    {

        return true;
    }

    public List getAParent()
    {
        return null;
    }

    public List getAllParents()
    {
        return null;
    }

    public String deleteParents()
    {
        return null;
    }

    public String updateParents()
    {
        return null;
    }

}
