package com.ecommerce.notification_service.controller;

import com.ecommerce.notification_service.dto.NotificationRequest;
import com.ecommerce.notification_service.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
public class NotificationController {

    private final NotificationService notificationService;

    @PostMapping("/send")
    public String sendEmail(@RequestBody NotificationRequest request) {

        return notificationService.sendNotification(request);
    }
}