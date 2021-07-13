package com.institutemgmt.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.institutemgmt.main.controllers",
        "com.institutemgmt.main.controllers.v2",
        "com.institutemgmt.main.entites",
        "com.institutemgmt.main.repository",
        "com.institutemgmt.main.services",
        "com.institutemgmt.main.swaggerconfig",
        "com.institutemgmt.main.corssupport",
        "com.institutemgmt.main.fileupload.*"})
public class main {
    public static void main(String[] args) {
        SpringApplication.run(main.class,args);
    }
}

