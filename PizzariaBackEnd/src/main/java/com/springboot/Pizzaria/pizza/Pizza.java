package com.springboot.Pizzaria.pizza;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "pizza")
@Entity(name = "pizza")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "idpizza")
public class Pizza {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idpizza;
    private String nome;
    private String imagem;
    private Integer preco;

    public Pizza(PizzaRequestDTO data){
        this.nome = data.nome();
        this.imagem = data.imagem();
        this.preco = data.preco();

    }
}
