import React from 'react';

const SavedQuotes = ({ savedQuotes, onDelete }) => {
  return (
    <div className="mt-8">
      {savedQuotes.length > 0 ? (
        <>
          <h2 className="text-xl font-bold">Saved Quotes</h2>
          {savedQuotes.map((quote, index) => (
            <div key={index} className="mt-4 p-4 bg-gray-100 rounded flex justify-between items-center hover:scale-95 duration-75">
              {quote}
              <button
                onClick={() => onDelete(index)}
                className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:scale-95 duration-75"
              >
                Delete
              </button>
            </div>
          ))}
        </>
      ) : (
        <h2 className="text-xl font-bold">No quotes</h2>
      )}
    </div>
  );
};

export default SavedQuotes;
