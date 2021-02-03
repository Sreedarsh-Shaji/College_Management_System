package com.institutemgmt.main.repository;

import com.institutemgmt.main.entites.TeacherRoles;
import com.institutemgmt.main.entites.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<Test, Integer> {
}
