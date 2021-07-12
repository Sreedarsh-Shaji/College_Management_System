package com.institutemgmt.main.repository;

import com.institutemgmt.main.DTO.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Questions,Integer> {
}
