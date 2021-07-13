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
public class Session {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int sessionId;

    @Getter
    @Setter
    int teacher;

    @Getter
    @Setter
    int cls;

    @Getter
    @Setter
    String time;

    @Getter
    @Setter
    int period;

    @Getter
    @Setter
    String urlToSession;

}
