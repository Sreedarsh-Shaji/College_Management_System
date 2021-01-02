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
public class Examination {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    @Getter
    @Setter
    String name;

    @Getter
    @Setter
    Date stDate;

    @Getter
    @Setter
    Date endDate;

    @Getter
    @Setter
    int noOfTests;

    @Getter
    @Setter
    @ManyToOne
    List<Test> tests;


}
