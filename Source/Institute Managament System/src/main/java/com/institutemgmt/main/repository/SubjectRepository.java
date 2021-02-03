package com.institutemgmt.main.repository;

import com.institutemgmt.main.entites.Student;
import com.institutemgmt.main.entites.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {
}
