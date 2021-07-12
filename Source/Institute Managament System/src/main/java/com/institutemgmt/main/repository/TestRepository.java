package com.institutemgmt.main.repository;

import com.institutemgmt.main.DTO.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<Test, Integer> {
}
