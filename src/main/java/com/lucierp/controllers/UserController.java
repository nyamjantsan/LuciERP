package com.lucierp.controllers;

import com.lucierp.models.User;
import com.lucierp.services.UserService;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/auth")
    public ResponseEntity<Map<String, String>> LoginUser(@RequestBody Map<String, Object> userMap){
        String username = (String) userMap.get("username");
        String password = (String) userMap.get("password");
        User user = userService.validateUser(username, password);
        Map<String, String> map = new HashMap<>();
        map.put("message", "Login Successfully");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
    
}