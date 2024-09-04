import React, { useState, useEffect } from 'react'; // Importar React, useState y useEffect
import './index.css'; // Importar los estilos CSS

const QuoteBox = ({ quote, onNewQuote, textColor }) => {
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    setFadeClass('fade-in'); // Agregar clase de animación
    const timer = setTimeout(() => setFadeClass(''), 1000); // Eliminar clase después de la animación
    return () => clearTimeout(timer);
  }, [quote]);

  return (
    <div className="quote-box">
      <p className={`quote-text ${fadeClass}`} style={{ color: textColor }}>
        {quote || 'Cargando...'}
      </p>
      <button className="fetch-button" onClick={onNewQuote}>
        Nueva Frase
      </button>
      <a href="https://www.linkedin.com/in/marcolibertini/" target="https://www.linkedin.com/in/marcolibertini/" rel="noopener noreferrer" className="linkedin-logo">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn Logo" />
      </a>
    </div>
  );
};

export default QuoteBox;
