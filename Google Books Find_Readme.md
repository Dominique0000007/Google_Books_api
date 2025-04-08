## 📚 Google Books Finder

**Google Books Finder** é uma aplicação Web desenvolvida com **React.js** e **Axios** que consome a **API pública do Google Books**, permitindo que usuários pesquisem livros pelo título e visualizem informações relevantes sobre cada obra.

O principal objetivo do projeto é demonstrar o consumo de uma API pública, utilizando boas práticas como **componentização**, **estrutura organizada de pastas** e **código comentado**.


### 🔍 Funcionalidades

- 🔎 Pesquisa de livros através da API do Google Books.
- 📖 Exibição de ao menos **quatro propriedades** de cada livro:
  - Título do livro
  - Autor(es)
  - Capa (imagem)
  - Data de publicação
- 💻 Interface responsiva e estilizada com HTML e CSS.
- 📦 Projeto organizado em componentes reutilizáveis.


### 🛠️ Tecnologias utilizadas

- React.js
- Axios
- HTML5 + CSS3
- Google Books API


### 🧩 Estrutura do projeto

```
src/
│
├── components/
│   └── BookCard.jsx          # Componente visual de cada livro
│
├── pages/
│   └── Home.jsx              # Página principal da aplicação
│
├── services/
│   └── api.js                # Configuração e consumo da API
│
├── App.jsx                   # Componente principal
└── index.js                  # Ponto de entrada do React
```


### 🧪 Exemplo de uso

Ao digitar o nome de um livro no campo de busca e clicar em "Buscar", a aplicação envia uma requisição para a API do Google Books. Os resultados são renderizados dinamicamente na tela com as informações do livro, incluindo a **imagem da capa**, título, autores e data de publicação.


### 🔗 Link da API

[https://developers.google.com/books](https://developers.google.com/books)



