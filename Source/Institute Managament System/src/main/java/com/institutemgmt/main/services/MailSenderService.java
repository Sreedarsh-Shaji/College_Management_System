package com.institutemgmt.main.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailSenderService {

    @Autowired
    private JavaMailSender javaMailSender;

    public boolean sendMail(String rec, String sub, String message)
    {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(rec);
        msg.setSubject(sub);
        msg.setText(message +"\n\n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n Regards,\n College Management System ");

        javaMailSender.send(msg);
        return true;
    }

}
