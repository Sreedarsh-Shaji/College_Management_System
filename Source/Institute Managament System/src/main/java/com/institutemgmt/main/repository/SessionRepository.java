package com.institutemgmt.main.repository;

import com.institutemgmt.main.DTO.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<Session,Integer> {
}
