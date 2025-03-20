import React, { useState } from "react";
import Depoimento from '../Depoimento';
import './HomeMain.css';

//vamos importar as imagens para Nossos Serviços
import imgA from '../../assets/dente.jpg';
import imgB from '../../assets/dente.jpg';
import imgC from '../../assets/dente.jpg';
import imgD from '../../assets/dente.jpg';

//vamos importar as imagens dos clientes
import cliente1 from '../../assets/cliente001.jpg';
import cliente2 from '../../assets/cliente002.jpg';
import cliente3 from '../../assets/cliente003.jpg';

//vamos importar a imagem do aparelho ortodontico
import aparelho from '../../assets/aparelho.jpg';


export default function HomeMain(){
    const [ mostrarMensagem, setMostrarMensagem ] = useState(false);

    const servicos = [ 
        { nome: 'Clareamento Dental',      imagem: imgA },
        { nome: 'Implantes Dentários',     imagem: imgB },
        { nome: 'Aparelhos Ortodônticos',  imagem: imgC },
        { nome: 'Tratamento de Canal',     imagem: imgD },
    ];

    const depoimentos = [
        { nome: 'Maria Silva',
          foto: cliente1,
          texto: 'O tratamento ortodôntico transformou meu sorriso! Super recomendo a clínica.'
        },
        { nome: 'João Pedro',
          foto: cliente2,
          texto: 'Atendimento excelente e profissionais muito capacitados. Estou muito satisfeito',
        },
        { nome: 'Ana Clara',
          foto: cliente3,
          texto: 'A clínica é moderna e o ambiente é muito agradável. Resultado foi incrível!!!'
        }
    ];

    const handleClickContato = () => {
        setMostrarMensagem(true);
    };

    return(
        <main className="home-main">
            <section className="servicos">

                <h2>Nossos Serviços</h2>
                <div className="servicos-grid">
                    {servicos.map(( servico, index ) => (
                        <div key={index} className="servico-item">
                            <img src={servico.imagem} alt={servico.imagem} />
                            <h3>{servico.nome}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section className="aparelho">
                <h2>Por que usar Aparelho Ortodôntico?</h2>
                <img src={aparelho} alt={aparelho} />
                <p>O aparelho ortodôntico corrige o posicionamento dos dentes, melhora a mordida, facilita a higiene e promove um sorriso mais bonito e saudável.</p>
            </section>

            <section className="depoimentos">
                    <h2>Depoimentos</h2>
                    <div className="depoimentos-container">
                        {depoimentos.map(( depoimento, index ) => (
                            <Depoimento 
                                key={index} 
                                nome={depoimento.nome}
                                foto={depoimento.foto}
                                texto={depoimento.texto} 
                            />
                        ))}
                    </div>
            </section>

            <button className="botao-contato" onClick={handleClickContato}>
                Entre em contato
            </button>

            {mostrarMensagem && (
                <div className="mensagem-contato">
                    <p>Entre em contato conosco pelo telefone (11) 1234-5678 ou envie um email para contato@clinicasorrisofeliz.com.br
                    </p>
                </div>
            )}
        </main>
    );
}