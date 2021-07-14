package com.institutemgmt.main.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Assignment_uploads {

    @Id
    @Getter @Setter
    public int submitId;

    @Getter @Setter
    public int assignmentId;

    @Getter @Setter
    public int submittedStudentId;

    @Getter @Setter
    public String submittedStudentName;

    @Getter @Setter
    public String path;

    @Getter @Setter
    public int mark;

}
