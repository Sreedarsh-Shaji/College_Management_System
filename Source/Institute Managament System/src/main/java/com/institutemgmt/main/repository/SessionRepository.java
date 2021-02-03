package com.institutemgmt.main.repository;

import com.institutemgmt.main.entites.Questions;
import com.institutemgmt.main.entites.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<Session,Integer> {
}
