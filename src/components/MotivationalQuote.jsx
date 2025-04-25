
import React, { useState, useEffect } from 'react';

const MotivationalQuote = () => {
  const [quote, setQuote] = useState({
    text: "Let food be thy medicine, and medicine be thy food.",
    author: "Hippocrates"
  });
  
  // List of health and nutrition quotes
  const quotes = [
    { 
      text: "Let food be thy medicine, and medicine be thy food.", 
      author: "Hippocrates" 
    },
    { 
      text: "The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison.", 
      author: "Ann Wigmore" 
    },
    { 
      text: "Take care of your body. It's the only place you have to live.", 
      author: "Jim Rohn" 
    },
    { 
      text: "Your diet is a bank account. Good food choices are good investments.", 
      author: "Bethenny Frankel" 
    },
    { 
      text: "You don't have to eat less, you just have to eat right.", 
      author: "Unknown" 
    },
    { 
      text: "If you keep good food in your fridge, you will eat good food.", 
      author: "Errick McAdams" 
    },
    { 
      text: "Health is a relationship between you and your body.", 
      author: "Terri Guillemets" 
    },
    { 
      text: "Don't eat anything your great-grandmother wouldn't recognize as food.", 
      author: "Michael Pollan" 
    }
  ];
  
  useEffect(() => {
    // Get random quote on component mount
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    
    // Change quote every 30 seconds
    const interval = setInterval(() => {
      const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(newQuote);
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="motivational-quote fade-in">
      <p>{quote.text}</p>
      <p className="quote-author">— {quote.author}</p>
    </div>
  );
};

export default MotivationalQuote;
