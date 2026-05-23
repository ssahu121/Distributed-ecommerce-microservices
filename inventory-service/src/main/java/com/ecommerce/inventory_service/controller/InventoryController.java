package com.ecommerce.inventory_service.controller;

import com.ecommerce.inventory_service.model.Inventory;
import com.ecommerce.inventory_service.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inventory")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @PostMapping
    public Inventory addInventory(@RequestBody Inventory inventory) {
        return inventoryService.saveInventory(inventory);
    }

    @GetMapping
    public List<Inventory> getAllInventory() {
        return inventoryService.getAllInventory();
    }
}