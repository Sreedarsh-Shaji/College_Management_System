package com.institutemgmt.main.services;

import com.institutemgmt.main.entites.Admin;
import com.institutemgmt.main.repository.AdminRepository;
import io.swagger.annotations.Api;
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

    public void setPasswordResetLink()
    {
        final String uri = "http://198.24.149.4/API/pushsms.aspx?loginID=hostel123&password=1234567&mobile=6235827275&text=HI%20HOW%20ARE%20YOU&senderid=CHPSMS&route_id=2&Unicode=0";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        log.info(result);
    }

}
