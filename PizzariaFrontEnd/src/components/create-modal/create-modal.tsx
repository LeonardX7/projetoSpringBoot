import { useEffect, useState } from "react";
import { usePizzaDataMutate } from "../../hooks/usePizzaDataMutate";
import { PizzaData } from "../../interface/PizzaData";

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void  
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}


export function CreateModal({ closeModal }: ModalProps) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState("");
    const { mutate, isSuccess } = usePizzaDataMutate();

    const enviar = () => {
        const pizzaData: PizzaData = {
            nome,
            preco,
            imagem
        }
        mutate(pizzaData)
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastra uma nova Pizza</h2>
                <form className="input-container">
                    <Input label="nome" value={nome} updateValue={setNome}></Input>
                    <Input label="preco" value={preco} updateValue={setPreco}></Input>
                    <Input label="imagem" value={imagem} updateValue={setImagem}></Input>
                </form>
                <button onClick={enviar} className="btn-secondary">Enviar</button>
            </div>
        </div>
    )
}