package com.institutemgmt.main.repository;

import com.institutemgmt.main.entites.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
}
