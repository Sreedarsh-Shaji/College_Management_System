package app.dao;

import java.util.logging.Logger;

public class Student {

    private int student_id;
    private String dob;
    private String email;
    private String name;
    private String password;
    private String phone_no;
    private int std_class;
    private String user_name;

    public Student(int student_id, String dob, String email, String name, String password, String phone_no, int std_class, String user_name) {
        this.student_id = student_id;
        this.dob = dob;
        this.email = email;
        this.name = name;
        this.password = password;
        this.phone_no = phone_no;
        this.std_class = std_class;
        this.user_name = user_name;
    }

    public int getStudent_id() {
        return student_id;
    }

    public void setStudent_id(int student_id) {
        this.student_id = student_id;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone_no() {
        return phone_no;
    }

    public void setPhone_no(String phone_no) {
        this.phone_no = phone_no;
    }

    public int getStd_class() {
        return std_class;
    }

    public void setStd_class(int std_class) {
        this.std_class = std_class;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

}
