package com.ecommerce.payment_service.service;

import com.ecommerce.payment_service.dto.PaymentRequest;
import com.ecommerce.payment_service.model.Payment;
import com.ecommerce.payment_service.repository.PaymentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;

    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    // CREATE PAYMENT
    public Payment makePayment(PaymentRequest request) {

        Payment payment = new Payment();

        payment.setOrderId(request.getOrderId());
        payment.setAmount(request.getAmount());
        payment.setPaymentMethod(request.getPaymentMethod());

        // TEMPORARY STATUS
        payment.setPaymentStatus("SUCCESS");

        return paymentRepository.save(payment);
    }

    // GET ALL PAYMENTS
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    // GET PAYMENT BY ID
    public Payment getPaymentById(Long id) {
        return paymentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
    }

}