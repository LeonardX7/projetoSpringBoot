import "./card.css"

interface CardProps {
    nome: string,
    imagem: string,
    preco: number
}

export function Card({ nome, imagem, preco }: CardProps) {
    return (
        <div className="card">
            <img src={imagem} />
            <h2>{nome}</h2>
            <p><b>Valor: R$ </b>{preco}</p>
        </div>
    )
}