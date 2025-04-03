import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Configure corretamente suas constantes
  const API_KEY = 'AIzaSyBX8dLrbbW_rP7OJ33wfVgyhDz0zvAPjbg'; // Sua chave (em produção, use variáveis de ambiente)
  const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

  const searchBooks = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: query,
          key: API_KEY,
          maxResults: 10,
          // Você pode adicionar outros parâmetros aqui:
          // langRestrict: 'pt', // Para livros em português
          // printType: 'books', // Somente livros (não magazines)
        }
      });
      setBooks(response.data.items || []);
    } catch (err) {
      setError('Erro ao buscar livros. Tente novamente.');
      console.error('Erro na API:', err);
    } finally {
      setLoading(false);
    }
  };

  // Função para buscar por autor (exemplo adicional)
  const searchByAuthor = async (authorName) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: `inauthor:${authorName}`,
          key: API_KEY,
          maxResults: 5
        }
      });
      setBooks(response.data.items || []);
    } catch (err) {
      setError('Erro ao buscar por autor');
    }
  };

  return (
    <div className="App">
      <h1>Google Books API</h1>
      <form onSubmit={searchBooks}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite título, autor ou assunto..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar Livros'}
        </button>
      </form>

      {/* Exemplo de botão para buscar por autor específico */}
      <button 
        onClick={() => searchByAuthor('Rowling')}
        style={{ marginTop: '10px' }}
      >
        Buscar livros da J.K. Rowling
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h2>{book.volumeInfo.title}</h2>
            {book.volumeInfo.authors && (
              <p>Autor: {book.volumeInfo.authors.join(', ')}</p>
            )}
            {book.volumeInfo.publishedDate && (
              <p>Ano: {book.volumeInfo.publishedDate.substring(0, 4)}</p>
            )}
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail.replace('http://', 'https://')}
                alt={`Capa de ${book.volumeInfo.title}`}
              />
            )}
            {book.volumeInfo.previewLink && (
              <a 
                href={book.volumeInfo.previewLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver prévia
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;