package com.institutemgmt.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.institutemgmt.main.controllers",
        "com.institutemgmt.main.entites",
        "com.institutemgmt.main.repository",
        "com.institutemgmt.main.services",
        "com.institutemgmt.main.swaggerconfig"})
public class main {
    public static void main(String[] args) {
        SpringApplication.run(main.class,args);
    }
}
