package com.lucierp.repositories;

import com.lucierp.exceptions.AuthException;
import com.lucierp.models.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

    private static final String SQL_FIND_BY_USERNAME = "select * from users where username=?";
    private static final String SQL_COUNT_BY_USERNAME = "select count(*) from users where username=?";

    @Autowired
    JdbcTemplate jdbcTemplate;

    // public User findByUsername(String username) throws AuthException {
    //     // return null;
    //     return jdbcTemplate.queryForObject(SQL_FIND_BY_USERNAME, new Object[]{username}, userRowMapper);
    // }
    public User findByUsernameAndPassword(String username, String password){
        try {
            User user = jdbcTemplate.queryForObject(SQL_FIND_BY_USERNAME, new Object[]{username}, userRowMapper);
            if(!password.equals(user.getPassword())) throw new AuthException("Invalid username/password");
            return user;
        } catch(EmptyResultDataAccessException e) {
            throw new AuthException("Invalid username/password");
        }
    }
    public Integer getCountByUsername(String username){
        return jdbcTemplate.queryForObject(SQL_COUNT_BY_USERNAME, new Object[]{username}, Integer.class);
    }
    private RowMapper<User> userRowMapper = ((rs, rowNum) -> {
        return new User(rs.getString("username"), rs.getString("password"));
    });
    
}