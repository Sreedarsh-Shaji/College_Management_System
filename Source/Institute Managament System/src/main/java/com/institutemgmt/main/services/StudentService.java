package com.institutemgmt.main.services;

import com.institutemgmt.main.DTO.Student;
import com.institutemgmt.main.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public void addStudent(Student st)
    {
        repository.save(st);
    }

    public Student studentLogin(String username, String password)
    {
        List<Student> students = repository.findByEmailAndPassword(username,password);
        if(students.size()>0)
        {
            return students.get(0);
        }
        else
        {
            return null;
        }
    }

    public List<?> getAllStudents() { return repository.findAll(); }

}
