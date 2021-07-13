package com.institutemgmt.main.services;

import com.institutemgmt.main.DTO.Parent;
import com.institutemgmt.main.repository.AdminRepository;
import com.institutemgmt.main.repository.ParentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParentService {

    @Autowired
    private ParentRepository repository;

    public void addParent(Parent parent)
    {
        repository.save(parent);
    }

}
