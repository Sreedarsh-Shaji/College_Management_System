package com.institutemgmt.main.repository;

import com.institutemgmt.main.entites.Assignment;
import com.institutemgmt.main.entites.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendanceRepository extends JpaRepository<Attendance,Integer> {
}
