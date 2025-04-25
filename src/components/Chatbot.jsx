
import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your NutriVibe assistant. Ask me anything about nutrition!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Sample responses - in a real app, these would come from the JSON file mentioned
  const responses = {
    "hello": "Hello! How can I help you with your nutrition today?",
    "hi": "Hi there! Ask me about healthy eating or nutrition tips!",
    "food": "A balanced diet consists of proteins, carbohydrates, fats, vitamins, and minerals. Try to include a variety of colorful fruits and vegetables in your meals.",
    "protein": "Good sources of protein include eggs, chicken, fish, tofu, beans, and nuts. It's essential for muscle building and repair.",
    "carbs": "Healthy carbohydrates come from whole grains, fruits, vegetables, and legumes. They provide energy for your body.",
    "fat": "Healthy fats are important for your body. Sources include avocados, olive oil, nuts, and fatty fish like salmon.",
    "vegetables": "Aim to eat a variety of vegetables daily. They provide essential vitamins, minerals, and fiber.",
    "fruits": "Fruits are rich in vitamins, minerals, and antioxidants. Try to eat a variety of colors.",
    "water": "Staying hydrated is crucial. Aim to drink at least 8 glasses of water daily.",
    "diet": "The best diet is one that's balanced, sustainable, and enjoyable for you. Focus on whole foods and moderation.",
    "weight loss": "Sustainable weight loss comes from a combination of healthy eating, portion control, and regular exercise.",
    "exercise": "Regular physical activity is important for overall health. Aim for at least 150 minutes of moderate activity weekly."
  };

  // Scroll to bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, sender: 'user' }]);
    
    // Process user input and get response
    setTimeout(() => {
      let botResponse = "I'm not sure how to respond to that. Try asking about nutrition, foods, or healthy eating!";
      
      // Simple keyword matching (in a real app, this would be more sophisticated)
      for (const [keyword, response] of Object.entries(responses)) {
        if (input.toLowerCase().includes(keyword)) {
          botResponse = response;
          break;
        }
      }
      
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSend} className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your nutrition question..."
        />
        <button type="submit" className="btn">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
