import React, { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import SavedQuotes from './components/SavedQuotes';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = await response.json();
    setQuote(data[0]);
  };

  useEffect(() => {
    fetchQuote();

    // Load saved quotes from localStorage
    const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    setSavedQuotes(savedQuotes);
  }, []);

  const saveQuote = (quote) => {
    const newSavedQuotes = [...savedQuotes, quote];
    setSavedQuotes(newSavedQuotes);

    // Save to localStorage
    localStorage.setItem('savedQuotes', JSON.stringify(newSavedQuotes));
  };

  const deleteQuote = (index) => {
    const newSavedQuotes = savedQuotes.filter((_, i) => i !== index);
    setSavedQuotes(newSavedQuotes);

    // Save to localStorage
    localStorage.setItem('savedQuotes', JSON.stringify(newSavedQuotes));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-red-600">Random Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} onSave={saveQuote} />
      <button
        onClick={fetchQuote}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Get New Quote
      </button>
      <SavedQuotes savedQuotes={savedQuotes} onDelete={deleteQuote} />
    </div>
  );
};

export default App;
