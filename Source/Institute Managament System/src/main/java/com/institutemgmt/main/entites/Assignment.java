package com.institutemgmt.main.entites;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Assignment {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    @Getter
    @Setter
    int subject;

    @Getter
    @Setter
    int teacher;

    @Getter
    @Setter
    int classId;

    @Getter
    @Setter
    int session;

    @Getter
    @Setter
    String title;

    @Getter
    @Setter
    String description;

    @Getter
    @Setter
    Date start;

    @Getter
    @Setter
    Date end;

}
