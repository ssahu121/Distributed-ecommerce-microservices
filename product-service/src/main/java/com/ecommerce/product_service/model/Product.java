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
    private String brand;
    private double price;
    private double oldPrice;
    private int discount;
    private double rating;
    private int quantity;
    private String image;
    private String category;

    // ✅ Real Default Constructor
    public Product() {
    }

    // ✅ Parameterized Constructor
    public Product(Long id,
                   String name,
                   String description,
                   String brand,
                   double price,
                   double oldPrice,
                   int discount,
                   double rating,
                   int quantity,
                   String image,
                   String category) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.price = price;
        this.oldPrice = oldPrice;
        this.discount = discount;
        this.rating = rating;
        this.quantity = quantity;
        this.image = image;
        this.category = category;
    }
}