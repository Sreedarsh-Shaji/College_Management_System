package com.institutemgmt.main.repository;

import com.institutemgmt.main.DTO.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssignmentRepository extends JpaRepository<Assignment,Integer> {
}
