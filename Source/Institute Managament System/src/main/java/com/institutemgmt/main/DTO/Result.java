package com.institutemgmt.main.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Result {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int resultId;

    @Getter
    @Setter
    int exam;

    @Getter
    @Setter
    float marksScored;

    @Getter
    @Setter
    int student;

    @Getter
    @Setter
    String remarks;

}
