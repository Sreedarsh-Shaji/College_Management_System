package com.institutemgmt.main.repository;

import com.institutemgmt.main.DTO.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}
