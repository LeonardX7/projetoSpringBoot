package com.springboot.Pizzaria.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.Pizzaria.pizza.Pizza;
import com.springboot.Pizzaria.pizza.PizzaRepository;
import com.springboot.Pizzaria.pizza.PizzaRequestDTO;
import com.springboot.Pizzaria.pizza.PizzaResponseDTO;

@RestController
@RequestMapping("pizza")
public class PizzaController {
    @Autowired
    private PizzaRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void savePizza(@RequestBody PizzaRequestDTO data) {
        Pizza pizzaData = new Pizza(data);
        repository.save(pizzaData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<PizzaResponseDTO> getPizzas() {
        List<PizzaResponseDTO> pizzaList = repository.findAll().stream().map(PizzaResponseDTO::new).toList();
        return pizzaList;
    };
}