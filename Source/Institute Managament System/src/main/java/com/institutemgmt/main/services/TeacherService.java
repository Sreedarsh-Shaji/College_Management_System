package com.institutemgmt.main.services;

import com.institutemgmt.main.entites.Teacher;
import com.institutemgmt.main.repository.TeacherRepository;

public class TeacherService {

    TeacherRepository repo;

    public String addTeacher(Teacher teacher){
        repo.save(teacher);
        return "Added new teacher";
    }

}
