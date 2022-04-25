package com.institutemgmt.main.DTO;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
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
    String department;

}
