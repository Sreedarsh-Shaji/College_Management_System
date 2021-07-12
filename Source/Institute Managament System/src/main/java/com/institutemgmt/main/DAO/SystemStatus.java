package com.institutemgmt.main.DAO;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class SystemStatus {
    @Getter @Setter
    private int departmentNumber;
    @Getter @Setter
    private int classNumber;
    @Getter @Setter
    private int teacherNumber;
    @Getter @Setter
    private int studentNumber;
    @Getter @Setter
    private int parentNumber;
}
