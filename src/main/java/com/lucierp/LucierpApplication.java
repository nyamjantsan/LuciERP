package com.lucierp;

// import org.springframework.boot.autoconfigure.*;
// import org.springframework.web.bind.annotation.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @RestController
// @EnableAutoConfiguration
@SpringBootApplication
public class LucierpApplication {

	// @RequestMapping("/")
    // String home() {
    //     return "Hello World!";
    // }
	public static void main(String[] args) {
		SpringApplication.run(LucierpApplication.class, args);
	}

}
