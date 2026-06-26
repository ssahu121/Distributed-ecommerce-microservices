package com.ecommerce.user_service.service.impl;

import com.ecommerce.user_service.dto.AuthResponse;
import com.ecommerce.user_service.dto.LoginRequest;
import com.ecommerce.user_service.dto.RegisterRequest;
import com.ecommerce.user_service.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public AuthResponse register(RegisterRequest request) {
        return null; // implement logic
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        return null; // implement logic
    }
}