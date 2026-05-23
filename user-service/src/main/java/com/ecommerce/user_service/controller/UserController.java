package com.ecommerce.user_service.controller;

import com.ecommerce.user_service.model.User;
import com.ecommerce.user_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping
    public User create(@RequestBody User user) {
        return service.saveUser(user);
    }

    @GetMapping
    public List<User> getAll() {
        return service.getAllUsers();
    }
}