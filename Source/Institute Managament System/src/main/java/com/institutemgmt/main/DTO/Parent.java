package com.institutemgmt.main.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Parent {

    @Getter @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int parent_id;

    @Getter
    @Setter
    String name;

    @Getter
    @Setter
    String user_name;

    @Getter
    @Setter
    String password;

    @Getter
    @Setter
    String email;

    @Getter
    @Setter
    Date dob;

    @Getter
    @Setter
    String phone_no;

    @Getter
    @Setter
    int student;

}
