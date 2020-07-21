package com.lucierp;

import com.lucierp.security.AuthFilter;

// import org.springframework.boot.autoconfigure.*;
// import org.springframework.web.bind.annotation.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

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
	@Bean
	public FilterRegistrationBean<AuthFilter> filterRegistrationBean() {
		FilterRegistrationBean<AuthFilter> registrationBean = new FilterRegistrationBean<>();
		AuthFilter authFilter = new AuthFilter();
		registrationBean.setFilter(authFilter);
		registrationBean.addUrlPatterns("/api/categories/*");
		return registrationBean;
	}

}
