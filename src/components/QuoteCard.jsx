import React from 'react';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 m-4 bg-white mx-auto hover:scale-95 duration-75">
      <p className="text-gray-700 text-base">{quote}</p>
      <button
        onClick={() => onSave(quote)}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default QuoteCard;
