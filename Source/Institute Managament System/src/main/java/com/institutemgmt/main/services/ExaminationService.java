package com.institutemgmt.main.services;

import com.institutemgmt.main.DTO.Assignment;
import com.institutemgmt.main.DTO.Examination;
import com.institutemgmt.main.repository.AssignmentRepository;
import com.institutemgmt.main.repository.ExaminationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ExaminationService {

    @Autowired
    ExaminationRepository repo;

    public void addExamination(Examination exam)
    {
        repo.save(exam);
    }

    public List<Examination> seeAllExams()
    {
        return repo.findAll();
    }

}
