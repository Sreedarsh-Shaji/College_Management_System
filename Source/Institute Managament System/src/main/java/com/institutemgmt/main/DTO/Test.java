package com.institutemgmt.main.entites;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Test {

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
    Date date;

    @Getter
    @Setter
    int examType;

    @Getter
    @Setter
    int totalMarks;

    @Getter
    @Setter
    int passMark;

    @Getter
    @Setter
    int totalQuestions;

    @Getter
    @Setter
    long duration;

}
