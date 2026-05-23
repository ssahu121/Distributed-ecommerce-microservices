package com.ecommerce.payment_service.controller;

import com.ecommerce.payment_service.dto.PaymentRequest;
import com.ecommerce.payment_service.model.Payment;
import com.ecommerce.payment_service.service.PaymentService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    // MAKE PAYMENT
    @PostMapping
    public Payment makePayment(@Valid @RequestBody PaymentRequest request) {
        return paymentService.makePayment(request);
    }

    // GET ALL PAYMENTS
    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    // GET PAYMENT BY ID
    @GetMapping("/{id}")
    public Payment getPaymentById(@PathVariable Long id) {
        return paymentService.getPaymentById(id);
    }

}