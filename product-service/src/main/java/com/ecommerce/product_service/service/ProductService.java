package com.ecommerce.product_service.service;

import com.ecommerce.product_service.model.Product;
import com.ecommerce.product_service.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    // Save Product
    public Product saveProduct(Product product) {
        return repository.save(product);
    }

    // Get All Products
    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    // Get Product By ID
    public Product getProductById(Long id) {
        return repository.findById(id).orElse(null);
    }

    // Delete Product
    public String deleteProduct(Long id) {
        repository.deleteById(id);
        return "Product Deleted Successfully";
    }
}