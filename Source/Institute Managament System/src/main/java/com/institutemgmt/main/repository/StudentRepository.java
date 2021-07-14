package com.institutemgmt.main.repository;

import com.institutemgmt.main.DTO.Student;
import com.institutemgmt.main.DTO.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Integer> {
    List<Student> findByEmailAndPassword(String userName, String password);
}
