package com.institutemgmt.main.services;

import com.institutemgmt.main.DTO.Teacher;
import com.institutemgmt.main.repository.TeacherRepository;
import com.institutemgmt.main.utils.RandomDataGenerator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class TeacherService {

    @Autowired
    private TeacherRepository repo;

    @Autowired
    MailSenderService mailSender;

    public String addTeacher(Teacher teacher){
        teacher.setPassword(RandomDataGenerator.getRandomStringOfLength(10));
        mailSender.sendMail(teacher.getEmail(),"Account created","Hi,\n Your account is created with username as this mail and password as "+ teacher.getPassword()+" \n Login to continue.");
        repo.save(teacher);
        return "Added new teacher";
    }

    public List<Teacher> getAllTeachers()
    {
        log.info("Reading all the teachers from the db");
        return repo.findAll();
    }

    public Optional<Teacher> getATeacherById(int id)
    {
        log.info("Returning teacher with id "+id);
        Optional<Teacher> t = repo.findById(id);
        return t;
    }

    public boolean deleteATeacherById(int id)
    {
        log.info("Deleting teacher with id "+id);
        Optional<Teacher> t = repo.findById(id);
        repo.delete(t.orElse(null));
        return true;
    }

    public boolean updateTeacher(Teacher teacher)
    {
        log.info("Updating teacher "+ teacher);
        repo.save(teacher);
        return true;
    }

    public List<Teacher> getByUserPwd(String username, String password){
        return repo.findByNameAndPassword(username,password);
    }

    public List<Teacher> getByMailPwd(String mail,String password){
        return repo.findByEmailAndPassword(mail,password);
    }



}