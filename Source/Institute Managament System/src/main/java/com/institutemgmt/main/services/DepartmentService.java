package com.institutemgmt.main.services;

import com.institutemgmt.main.entites.Assignment;
import com.institutemgmt.main.entites.Department;
import com.institutemgmt.main.repository.AssignmentRepository;
import com.institutemgmt.main.repository.DepartmentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class DepartmentService {

    @Autowired
    DepartmentRepository repo;

    public boolean addDepartment(Department department){
        repo.save(department);
        log.info("Department added");
        return true;
    }

    public List<Department> getAllDepartment()
    {
        log.info("Reading all the Department from the db");
        return repo.findAll();
    }

    public Optional<Department> getAnDepartmentById(int id)
    {
        log.info("Returning department with id "+id);
        Optional<Department> t = repo.findById(id);
        return t;
    }

    public boolean deleteAnDepartmentById(int id)
    {
        log.info("Deleting department with id "+id);
        Optional<Department> t = repo.findById(id);
        repo.delete(t.orElse(null));
        return true;
    }

    public boolean updateClasses(Department department)
    {
        log.info("Updating department "+ department);
        repo.save(department);
        return true;
    }

}
