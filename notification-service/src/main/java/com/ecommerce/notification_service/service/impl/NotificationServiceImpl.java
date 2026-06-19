package com.ecommerce.notification_service.service.impl;

import com.ecommerce.notification_service.dto.NotificationRequest;
import com.ecommerce.notification_service.entity.Notification;
import com.ecommerce.notification_service.repository.NotificationRepository;
import com.ecommerce.notification_service.service.NotificationService;

import lombok.RequiredArgsConstructor;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NotificationServiceImpl implements NotificationService {

    private final JavaMailSender mailSender;
    private final NotificationRepository repository;

    @Override
    public String sendNotification(NotificationRequest request) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(request.getEmail());
        message.setSubject(request.getSubject());
        message.setText(request.getMessage());

        mailSender.send(message);

        Notification notification = Notification.builder()
                .email(request.getEmail())
                .subject(request.getSubject())
                .message(request.getMessage())
                .status("SENT")
                .build();

        repository.save(notification);

        return "Email Sent Successfully";
    }
}