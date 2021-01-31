package com.institutemgmt.main.entites;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Questions {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    @Getter
    @Setter
    int test;

    @Getter
    @Setter
    int questionNumber;

    @Getter
    @Setter
    String question;

    @Getter
    @Setter
    String answer1;

    @Getter
    @Setter
    String answer2;

    @Getter
    @Setter
    String answer3;

    @Getter
    @Setter
    String answer4;

    @Getter
    @Setter
    String answer5;

    @Getter
    @Setter
    String correctAns;

    @Getter
    @Setter
    int score;

}
