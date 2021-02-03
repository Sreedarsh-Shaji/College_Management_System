package com.institutemgmt.main.repository;

import com.institutemgmt.main.entites.Examination;
import com.institutemgmt.main.entites.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Questions,Integer> {
}
