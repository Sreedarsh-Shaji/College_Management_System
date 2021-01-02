package com.institutemgmt.main.entites;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
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

    @Getter
    @Setter
    @ManyToOne
    List<Subject> subjects;

    @Getter
    @Setter
    int staffId;

}
