package com.ecommerce.notification_service.service;

import com.ecommerce.notification_service.dto.NotificationRequest;

public interface NotificationService {

    String sendNotification(NotificationRequest request);
}