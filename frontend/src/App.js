import React, { useState, useEffect } from 'react';
import './index.css'; // Importar los estilos CSS
import QuoteBox from './QuoteBox'; // Importar el componente QuoteBox

const App = () => {
  const [quote, setQuote] = useState(''); // Estado para almacenar la frase actual
  const [bgColor, setBgColor] = useState('#ffffff'); // Estado para el color de fondo
  const [textColor, setTextColor] = useState('#333'); // Estado para el color del texto

  // Función para obtener una nueva frase desde la API
  const fetchQuote = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/quotes');
      const quotes = await response.json();
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const newQuote = quotes[randomIndex];
      setQuote(newQuote); // Actualiza el estado con una frase aleatoria

      // Cambiar el color de fondo y del texto a un gradiente lineal
      const randomGradient = getRandomGradient();
      setBgColor(randomGradient);
      setTextColor(getRandomColor()); // Mantén el texto de un solo color para la legibilidad
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  // Función para obtener un color aleatorio
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Función para obtener un gradiente lineal aleatorio
  const getRandomGradient = () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(45deg, ${color1}, ${color2})`;
  };

  // Llama a fetchQuote cuando el componente se monte
  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    document.body.style.background = bgColor;
  }, [bgColor]);

  return (
    <div id="app">
      <h1 className="app-title">Bukowski-Quote-Generator</h1>
      <QuoteBox quote={quote} onNewQuote={fetchQuote} textColor={textColor} />
      <div className="linkedin-logo">
        {/* Aquí puedes agregar el logo de LinkedIn */}
      </div>
    </div>
  );
};

export default App;
