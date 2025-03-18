import React, { useState } from 'react';
import depoimento from 'depoimento';
import './HomeMain.css';

// Importando as imagens para nossos serviços
import imgA from '../../assets/dente.jpg';
import imgB from '../../assets/dente.jpg';  // Certifique-se de alterar para o arquivo correto
import imgC from '../../assets/dente.jpg';  // Certifique-se de alterar para o arquivo correto
import imgD from '../../assets/dente.jpg';  // Certifique-se de alterar para o arquivo correto

// Importando as imagens dos clientes
import cliente1 from '../../assets/cliente01.jpg';
import cliente2 from '../../assets/cliente02.jpg';
import cliente3 from '../../assets/cliente03.jpg';

// Importando a imagem do aparelho ortodontico
import aparelho from '../../assets/aparelho.jpg';

export default function HomeMain() {
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  // Serviços
  const servicos = [
    {
      nome: 'Clareamento Dental, Implementos Dentários, Aparelhos Ortodônticos, Tratamento Dentário',
      imagens: [imgA, imgB, imgC, imgD],
    },
  ];

  // Depoimentos
  const depoimentos = [
    {
      nome: 'Maria Silva',
      foto: cliente1,
      texto: 'O tratamento ortodôntico transformou meu sorriso! Super recomendo.',
    },
    {
      nome: 'João Pedro',
      foto: cliente2,
      texto: 'Atendimento excelente e profissionais muito capacitados. Estou muito satisfeito.',
    },
    {
      nome: 'Ana Clara',
      foto: cliente3,
      texto: 'A clínica é moderna e o ambiente é muito agradável. Resultado foi incrível.',
    },
  ];

  const handleClickContato = () => {
    setMostrarMensagem(true);
  };

  return (
    <main className="home-main">
      {/* Seção de Serviços */}
      <section className="servicos">
        <h2>Nossos Serviços</h2>
        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <div key={index} className="servico-item">
              {servico.imagens.map((imagem, i) => (
                <img key={i} src={imagem} alt={`Imagem do Serviço ${i + 1}`} />
              ))}
              <h3>{servico.nome}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="depoimentos">
        <h2>O que nossos clientes dizem</h2>
        <div className="depoimento-container">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="depoimento-item">
              <img src={depoimento.foto} alt={`Foto de ${depoimento.nome}`} />
              <h3>{depoimento.nome}</h3>
              <p>{depoimento.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Botão de Contato */}
      <button className="botao-contato" onClick={handleClickContato}>
        Entre em contato
      </button>

      {/* Mensagem de Contato */}
      {mostrarMensagem && (
        <div className="mensagem-contato">
          <p>
            Entre em contato conosco pelo telefone (11)1234-5678 ou envie um e-mail para{' '}
            <a href="mailto:clinicasorrisofeliz@gmail.com">clinicasorrisofeliz@gmail.com</a>
          </p>
        </div>
      )}
    </main>
  );
}