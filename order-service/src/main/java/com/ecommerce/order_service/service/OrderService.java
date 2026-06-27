package com.ecommerce.order_service.service;

import com.ecommerce.order_service.dto.OrderRequest;
import com.ecommerce.order_service.entity.Order;
import com.ecommerce.order_service.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    public Order placeOrder(OrderRequest request) {

        Order order = Order.builder()
                .userEmail(request.getUserEmail())
                .productName(request.getProductName())
                .price(request.getPrice())
                .quantity(request.getQuantity())
                .totalAmount(request.getTotalAmount())
                .deliveryAddress(request.getDeliveryAddress())
                .paymentMode(request.getPaymentMode())
                .orderStatus("PLACED")
                .build();

        return repository.save(order);
    }

    public List<Order> getOrders(String email) {
        return repository.findByUserEmail(email);
    }

}