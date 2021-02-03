package com.institutemgmt.main.services;

import com.institutemgmt.main.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {

    @Autowired
    private AdminRepository repository;

}
