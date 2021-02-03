package com.institutemgmt.main.repository;

import com.institutemgmt.main.entites.Assignment;
import com.institutemgmt.main.entites.Classes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssignmentRepository extends JpaRepository<Assignment,Integer> {
}
