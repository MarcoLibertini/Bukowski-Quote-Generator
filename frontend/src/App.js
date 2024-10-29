// App.js
import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';
import { FaLinkedin } from 'react-icons/fa';

const App = () => {
  const [quote, setQuote] = useState(''); // Estado para almacenar la frase actual
  const [bgGradient, setBgGradient] = useState('from-blue-500 to-green-500'); // Estado para el gradiente de fondo

  // Función para obtener una nueva frase desde la API
  const fetchQuote = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/quotes');
      const quotes = await response.json();
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const newQuote = quotes[randomIndex];
      setQuote(newQuote); // Actualiza el estado con una frase aleatoria

      // Cambiar el gradiente de fondo
      setBgGradient(getRandomGradient());
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  // Función para obtener un gradiente aleatorio de Tailwind
  const gradients = [
    'from-purple-500 to-pink-500',
    'from-green-500 to-blue-500',
    'from-yellow-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-teal-500 to-orange-500',
  ];

  const getRandomGradient = () => gradients[Math.floor(Math.random() * gradients.length)];

  // Llama a fetchQuote cuando el componente se monte
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${bgGradient} transition-all duration-700`}>
      <div className="p-8 max-w-md w-full bg-opacity-0 rounded-lg shadow-lg text-center relative">
        <h1 className="text-3xl font-bold text-white mb-6">Bukowski Quote Generator</h1>
        
        {/* Contenedor del QuoteBox */}
        <QuoteBox quote={quote} />
        
        {/* Botón de Nueva Frase */}
        <div className="flex justify-end mt-4">
          <button
            onClick={fetchQuote}
            className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition-colors duration-300"
          >
            New Quote
          </button>
        </div>
      </div>
      
      {/* Icono de LinkedIn */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a href="https://www.linkedin.com/in/marcolibertini/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-3xl hover:text-gray-300 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default App;
