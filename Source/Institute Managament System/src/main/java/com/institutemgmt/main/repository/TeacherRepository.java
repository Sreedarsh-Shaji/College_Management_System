package com.institutemgmt.main.repository;

import com.institutemgmt.main.DTO.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
}
