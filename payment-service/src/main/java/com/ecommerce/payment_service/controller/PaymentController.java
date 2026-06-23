
package com.ecommerce.payment_service.controller;

import com.ecommerce.payment_service.entity.Payment;
import com.ecommerce.payment_service.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    // Create Payment
    @PostMapping
    public Payment savePayment(@RequestBody Payment payment) {
        return paymentRepository.save(payment);
    }

    // Get All Payments
    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    // Get Payment By ID
    @GetMapping("/{id}")
    public Payment getPaymentById(@PathVariable Long id) {
        return paymentRepository.findById(id).orElse(null);
    }

    // Delete Payment
    @DeleteMapping("/{id}")
    public String deletePayment(@PathVariable Long id) {
        paymentRepository.deleteById(id);
        return "Payment deleted successfully";
    }

    // Update Payment Status
    @PutMapping("/{id}/status")
    public Payment updateStatus(@PathVariable Long id,
            @RequestParam String status) {

        Payment payment = paymentRepository.findById(id).orElseThrow();

        payment.setPaymentStatus(status);

        return paymentRepository.save(payment);
    }

    // Get Payments By Order ID
    @GetMapping("/order/{orderId}")
    public List<Payment> getPaymentsByOrderId(@PathVariable Long orderId) {
        return paymentRepository.findByOrderId(orderId);
    }

    // Count Payments
    @GetMapping("/count")
    public long countPayments() {
        return paymentRepository.count();
    }
}
