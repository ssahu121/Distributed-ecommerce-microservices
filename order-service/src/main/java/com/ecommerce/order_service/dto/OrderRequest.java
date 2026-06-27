package com.ecommerce.order_service.dto;

import lombok.Data;

@Data
public class OrderRequest {

    private String userEmail;

    private String productName;

    private Double price;

    private Integer quantity;

    private Double totalAmount;

    private String deliveryAddress;

    private String paymentMode;

}