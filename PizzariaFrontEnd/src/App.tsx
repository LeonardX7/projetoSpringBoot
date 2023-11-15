import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { usePizzaData } from './hooks/usePizzaData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = usePizzaData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Pizzaria Bella Pizza</h1>
      <div className="card-grid">
        {data?.map(pizzaData =>
          <Card
            nome={pizzaData.nome}
            imagem={pizzaData.imagem}
            preco={pizzaData.preco}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Cadastro</button>
    </div>
  )
}

export default App
