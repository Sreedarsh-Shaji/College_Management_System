package com.institutemgmt.main.repository;

import com.institutemgmt.main.entites.Teacher;
import com.institutemgmt.main.entites.TeacherRoles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRolesRepository extends JpaRepository<TeacherRoles, Integer> {
}
