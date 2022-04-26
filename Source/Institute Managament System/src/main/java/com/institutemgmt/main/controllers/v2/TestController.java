package com.institutemgmt.main.controllers.v2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*@RestController
@RequestMapping(value = "api/v2/assignment")
@Api("Handles the class details")*/
@RestController
        @RequestMapping("/mail")
public class TestController {

    @Autowired private JavaMailSender javaMailSender;

    @GetMapping()
    public void sendMail()
    {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("sreedarsh0039@gmail.com");

        msg.setSubject("Testing from Spring Boot");
        msg.setText("Hello World \n Spring Boot Email");

        javaMailSender.send(msg);
    }

}