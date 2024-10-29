import React from 'react';

const QuoteBox = ({ quote }) => {
  return (
    <div className="flex items-center justify-center min-h-[150px] max-h-[200px] overflow-hidden">
      <p className="text-lg md:text-xl text-gray-100 mx-4 font-light leading-relaxed transition-all duration-1000 ease-in-out text-center line-clamp-4">
        {quote}
      </p>
    </div>
  );
};

export default QuoteBox;
