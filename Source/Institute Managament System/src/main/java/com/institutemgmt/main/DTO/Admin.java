package com.institutemgmt.main.DTO;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Admin {

    @Getter @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int admin_id;
    @Getter @Setter
    String name;
    @Getter @Setter
    String userName;
    @Getter @Setter
    String password;
    @Getter @Setter
    String email;
    @Getter @Setter
    Date dob;
    @Getter @Setter
    String phone_no;

}
