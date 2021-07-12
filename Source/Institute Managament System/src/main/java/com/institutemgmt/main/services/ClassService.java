package com.institutemgmt.main.services;

import com.institutemgmt.main.DTO.Classes;
import com.institutemgmt.main.repository.ClassRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ClassService {

    @Autowired
    ClassRepository repo;

    public boolean addClass(Classes classes){
        repo.save(classes);
        log.info("Classes added");
        return true;
    }

    public List<Classes> getAllClasses()
    {
        log.info("Reading all the classes from the db");
        return repo.findAll();
    }

    public Optional<Classes> getAClassById(int id)
    {
        log.info("Returning class with id "+id);
        Optional<Classes> t = repo.findById(id);
        return t;
    }

    public boolean deleteAClassesById(int id)
    {
        log.info("Deleting teacher with id "+id);
        Optional<Classes> t = repo.findById(id);
        repo.delete(t.orElse(null));
        return true;
    }

    public boolean updateClasses(Classes classes)
    {
        log.info("Updating teacher "+ classes);
        repo.save(classes);
        return true;
    }

}
