package com.lucierp.services;

import com.lucierp.exceptions.AuthException;
import com.lucierp.models.User;
import com.lucierp.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService {

    @Autowired
    UserRepository userRepository;
    public User validateUser(String username, String password) throws AuthException{
        if(username != null) username = username.toLowerCase();
        return userRepository.findByUsernameAndPassword(username, password);
    }

    
}