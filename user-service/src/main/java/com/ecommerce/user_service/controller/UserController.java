package com.ecommerce.user_service.controller;

import com.ecommerce.user_service.dto.AuthResponse;
import com.ecommerce.user_service.dto.RegisterRequest;
import com.ecommerce.user_service.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public AuthResponse register(@RequestBody RegisterRequest request) {
        return userService.register(request);
    }
}