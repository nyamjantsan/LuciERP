package com.lucierp.controllers;

import com.lucierp.models.User;
import com.lucierp.services.UserService;
import com.lucierp.security.jwt.JwtConstants;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

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
        // Map<String, String> map = new HashMap<>();
        // map.put("message", "Login Successfully");
        return new ResponseEntity<>(genereteJWTToken(user), HttpStatus.OK);
    }
    private Map<String, String> genereteJWTToken(User user){
        long timestamp = System.currentTimeMillis();
        String token = Jwts.builder().signWith(SignatureAlgorithm.HS256, JwtConstants.API_SECRET_KEY)
                        .setIssuedAt(new Date(timestamp))
                        .setExpiration(new Date(timestamp + JwtConstants.TOKEN_VALIDITY))
                        .claim("username", user.getUsername())
                        .compact();
        Map<String, String> map = new HashMap<>();
        map.put("token", token);
        return map;

    }
    
}