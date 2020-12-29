package com.institutemgmt.main.repository;

import com.institutemgmt.main.entites.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

    List<Admin> findByUserNameAndPassword(String userName, String password);
    List<Admin> findByEmailAndPassword(String userName, String password);
    List<Admin> findByEmail(String email);

}
