package com.ecommerce.payment_service.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class PaymentRequest {

    @NotNull(message = "Order ID is required")
    private Long orderId;

    @NotNull(message = "Amount is required")
    private Double amount;

    @NotNull(message = "Payment method is required")
    private String paymentMethod;

}