package com.ecommerce.product_service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private double price;
    private int quantity;
    private String category;

    // Default Constructor
    public Product() {
    }

    // Parameterized Constructor
    public Product(Long id, String name,String description, double price, int quantity,String category) {
        this.id = id;
        this.name = name;
        this.description=description;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }}
