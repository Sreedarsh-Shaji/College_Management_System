package com.institutemgmt.main.repository;

import com.institutemgmt.main.DTO.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {
}
