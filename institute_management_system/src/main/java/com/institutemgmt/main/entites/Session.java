package com.institutemgmt.main.entites;

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
public class Session {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int sessionId;

    @Getter
    @Setter
    Teacher teacher;

    @Getter
    @Setter
    Classes cls;

    @Getter
    @Setter
    String classType;

    @Getter
    @Setter
    int period;

}
