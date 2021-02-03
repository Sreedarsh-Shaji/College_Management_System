package com.institutemgmt.main.repository;

import com.institutemgmt.main.entites.Examination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamTypeRepository extends JpaRepository<Examination,Integer> {
}
