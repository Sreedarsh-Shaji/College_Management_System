package com.institutemgmt.main.DTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@ToString
public class Teacher {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int teacher_id;

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
    int department;

    public Teacher(int teacher_id, String name, String user_name, String password, String email, Date dob, String phone_no, int department, List<Integer> subjects, int staffId) {
        this.teacher_id = teacher_id;
        this.name = name;
        this.user_name = user_name;
        this.password = password;
        this.email = email;
        this.dob = dob;
        this.phone_no = phone_no;
        this.department = department;
    }

    public Teacher() {
    }
}
