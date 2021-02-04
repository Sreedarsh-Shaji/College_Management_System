package com.institutemgmt.main.entites;

import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "College_dept")
public class Department {

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
    @OneToOne
    Teacher HOD;

}
