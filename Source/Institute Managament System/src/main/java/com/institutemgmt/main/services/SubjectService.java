package com.institutemgmt.main.services;

import com.institutemgmt.main.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubjectService {

    @Autowired
    private StudentRepository repository;

}
