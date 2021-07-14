package com.institutemgmt.main.services;

import com.institutemgmt.main.DTO.Session;
import com.institutemgmt.main.repository.AdminRepository;
import com.institutemgmt.main.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SessionService {

    @Autowired
    private AdminRepository repository;

    @Autowired
    private SessionRepository sessionRepository;

    public void addSession(Session session)
    {
        sessionRepository.save(session);
    }

    public List<Session> getAllSessions(){ return sessionRepository.findAll(); }
}
