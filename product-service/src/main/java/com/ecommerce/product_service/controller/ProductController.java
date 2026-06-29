package com.ecommerce.product_service.controller;

import com.ecommerce.product_service.model.Product;
import com.ecommerce.product_service.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping
    public Product addProduct(@RequestBody Product product) {

        System.out.println("====== PRODUCT RECEIVED ======");
        System.out.println(product);

        return service.saveProduct(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return service.getProductById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {
        return service.deleteProduct(id);
    }

    @GetMapping("/search/{name}")
    public List<Product> searchProducts(@PathVariable String name) {
        return service.searchProducts(name);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id,
            @RequestBody Product product) {

        return service.updateProduct(id, product);

    }
}