package com.springboot.Pizzaria.pizza;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Table(name = "pizzas")
@Entity(name = "pizzas")
public class Pizza {
    private Long idPizza;
    private String nome;
    private String imagem;
    private Integer preco;

}
