package com.ecommerce.order_service.controller;

import com.ecommerce.order_service.dto.OrderRequest;
import com.ecommerce.order_service.entity.Order;
import com.ecommerce.order_service.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin("*")
public class OrderController {

    @Autowired
    private OrderService service;

    @PostMapping("/place")
    public Order placeOrder(@RequestBody OrderRequest request) {
        return service.placeOrder(request);
    }

    @GetMapping("/my-orders/{email}")
    public List<Order> getOrders(@PathVariable String email) {
        return service.getOrders(email);
    }
}