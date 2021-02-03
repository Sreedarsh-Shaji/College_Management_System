package com.institutemgmt.main.repository;

import com.institutemgmt.main.entites.Department;
import com.institutemgmt.main.entites.Examination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExaminationRepository extends JpaRepository<Examination,Integer> {
}
