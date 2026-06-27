package com.ecommerce.order_service.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userEmail;

    private String productName;

    private Double price;

    private Integer quantity;

    private Double totalAmount;

    private String deliveryAddress;

    private String paymentMode;

    private String orderStatus;
}