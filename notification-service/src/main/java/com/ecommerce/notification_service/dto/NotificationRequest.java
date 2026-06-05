package com.ecommerce.notification_service.dto;

import lombok.Data;

@Data
public class NotificationRequest {

    private String email;

    private String subject;

    private String message;

    private String status;
}