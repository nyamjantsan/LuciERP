package com.lucierp.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    
    @GetMapping("")
    public String getAllCategories(HttpServletRequest request) {
        String username = (String) request.getAttribute("username");
        return "Authenticated! Username: " + username;
    }
    
}