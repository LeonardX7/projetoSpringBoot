package com.springboot.Pizzaria.pizza;

public record PizzaResponseDTO(Long id, String nome, String imagem, Integer preco) {
    public PizzaResponseDTO(Pizza pizza) {
        this(pizza.getIdpizza(), pizza.getNome(), pizza.getImagem(), pizza.getPreco());
    }
}
