package com.institutemgmt.main.services;

import com.institutemgmt.main.entites.Assignment;
import com.institutemgmt.main.entites.Classes;
import com.institutemgmt.main.repository.AssignmentRepository;
import com.institutemgmt.main.repository.ClassRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class AssignmentService {

    @Autowired
    AssignmentRepository repo;

    public boolean addAssignment(Assignment assignment){
        repo.save(assignment);
        log.info("Assignment added");
        return true;
    }

    public List<Assignment> getAllAssignment()
    {
        log.info("Reading all the assignment from the db");
        return repo.findAll();
    }

    public Optional<Assignment> getAnAssignmentById(int id)
    {
        log.info("Returning assignment with id "+id);
        Optional<Assignment> t = repo.findById(id);
        return t;
    }

    public boolean deleteAnAssignmentById(int id)
    {
        log.info("Deleting teacher with id "+id);
        Optional<Assignment> t = repo.findById(id);
        repo.delete(t.orElse(null));
        return true;
    }

    public boolean updateClasses(Assignment assignment)
    {
        log.info("Updating teacher "+ assignment);
        repo.save(assignment);
        return true;
    }

}
