package com.institutemgmt.main.repository;

import com.institutemgmt.main.DTO.Admin;
import com.institutemgmt.main.DTO.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {

    List<Teacher> findByNameAndPassword(String userName, String password);
    List<Teacher> findByEmailAndPassword(String userName, String password);
    List<Teacher> findByEmail(String email);

}
