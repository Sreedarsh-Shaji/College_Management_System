package com.institutemgmt.main.services;

import com.institutemgmt.main.DTO.Assignment;
import com.institutemgmt.main.DTO.Attendance;
import com.institutemgmt.main.repository.AssignmentRepository;
import com.institutemgmt.main.repository.AttendanceRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class AttendanceService {

    @Autowired
    AttendanceRepository repo;

    public boolean addAtt(Attendance attendance){
        repo.save(attendance);
        log.info("Assignment added");
        return true;
    }



}
