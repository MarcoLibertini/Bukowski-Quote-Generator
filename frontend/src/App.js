import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';
import { FaLinkedin } from 'react-icons/fa';
import quotes from './quotes.json';  // Importa el archivo JSON directamente

const App = () => {
  const [quote, setQuote] = useState('');
  const [bgGradient, setBgGradient] = useState('from-blue-500 to-green-500');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setBgGradient(getRandomGradient());
  };

  const gradients = [
    'from-purple-500 to-pink-500',
    'from-green-500 to-blue-500',
    'from-yellow-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-teal-500 to-orange-500',
  ];

  const getRandomGradient = () => gradients[Math.floor(Math.random() * gradients.length)];

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${bgGradient} transition-all duration-700`}>
      <div className="p-8 max-w-md w-full bg-opacity-0 rounded-lg shadow-lg text-center relative">
        <h1 className="text-3xl font-bold text-white mb-6">Bukowski Quote Generator</h1>
        <QuoteBox quote={quote} />
        <div className="flex justify-end mt-4">
          <button
            onClick={getRandomQuote}
            className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition-colors duration-300"
          >
            New Quote
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a href="https://www.linkedin.com/in/marcolibertini/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-3xl hover:text-gray-300 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default App;
