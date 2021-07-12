package com.institutemgmt.main.services;

import com.institutemgmt.main.DAO.SystemStatus;
import com.institutemgmt.main.DTO.Admin;
import com.institutemgmt.main.DTO.Department;
import com.institutemgmt.main.repository.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Slf4j
@Service
public class AdminService {

    @Autowired
    private AdminRepository repo;

    @Autowired
    private StudentRepository stRepo;
    @Autowired
    private TeacherRepository tRepo;
    @Autowired
    private ParentRepository pRepo;
    @Autowired
    private DepartmentRepository dRepo;


    public List<Admin> getAllAdmin(){return repo.findAll();}

    public List<Admin> getByMailPwd(String mail,String password){
        return repo.findByEmailAndPassword(mail,password);
    }

    public List<Admin> getByUserPwd(String username,String password){
        return repo.findByUserNameAndPassword(username,password);
    }

    public boolean updatePassword(String email,String password)
    {
        Admin admin = null;
        List<Admin> matches = repo.findByEmail(email);
        matches.forEach((Admin value)-> log.info(value.toString()));
        if(matches.size()>0)
        {
             Admin tempadmin =  (Admin) matches.get(0);
             tempadmin.setPassword(password);
             repo.save(tempadmin);
             return true;
        }
        else
        {
            return false;
        }
    }

    public SystemStatus returnSystemStatus()
    {
        SystemStatus ss = new SystemStatus();
        ss.setTeacherNumber(tRepo.findAll().size());
        ss.setDepartmentNumber(0);
        ss.setParentNumber(pRepo.findAll().size());
        ss.setClassNumber(0);
        ss.setStudentNumber(stRepo.findAll().size());
        return ss;
    }

    public List<Department> getAllDepartment()
    {
        log.info("Reading all the Department from the db");
        return dRepo.findAll();
    }

    public boolean addDepartment(Department department){
        dRepo.save(department);
        log.info("Department added");
        return true;
    }

    public void setPasswordResetLink()
    {
        final String uri = "http://198.24.149.4/API/pushsms.aspx?loginID=hostel123&password=1234567&mobile=6235827275&text=HI%20HOW%20ARE%20YOU&senderid=CHPSMS&route_id=2&Unicode=0";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        log.info(result);
    }

}
