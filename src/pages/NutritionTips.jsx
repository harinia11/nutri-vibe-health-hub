
import React from 'react';
import Chatbot from '../components/Chatbot';

const NutritionTips = () => {
  const tips = [
    {
      title: "Eat a Rainbow of Fruits and Vegetables",
      description: "Different colored fruits and vegetables contain different nutrients. Try to include a variety of colors in your diet to ensure you get a wide range of vitamins and minerals.",
      icon: "🌈"
    },
    {
      title: "Stay Hydrated",
      description: "Water is essential for many bodily functions. Aim to drink at least 8 glasses of water per day, and more if you're active or in hot weather.",
      icon: "💧"
    },
    {
      title: "Limit Processed Foods",
      description: "Processed foods often contain added sugars, unhealthy fats, and sodium. Focus on whole foods as much as possible.",
      icon: "🍔"
    },
    {
      title: "Mindful Eating",
      description: "Pay attention to what and when you eat. Avoid distractions like TV or phones during meals and listen to your body's hunger and fullness cues.",
      icon: "🧠"
    },
    {
      title: "Balance Your Macronutrients",
      description: "Include a healthy balance of proteins, carbohydrates, and fats in your diet. Each plays an important role in overall health.",
      icon: "⚖️"
    },
    {
      title: "Plan Your Meals",
      description: "Planning meals in advance can help you make healthier choices and avoid impulsive, less nutritious options.",
      icon: "📝"
    }
  ];

  return (
    <div className="container page-container">
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Nutrition Tips</h1>
      
      <div className="grid" style={{ marginBottom: '40px' }}>
        {tips.map((tip, index) => (
          <div key={index} className="card">
            <div className="icon" style={{ fontSize: '3rem', marginBottom: '15px' }}>{tip.icon}</div>
            <h3 style={{ marginBottom: '15px' }}>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
      
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Ask Our Nutrition Assistant</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Have questions about nutrition or healthy eating? Our chatbot can help you with personalized recommendations.
      </p>
      
      <Chatbot />
    </div>
  );
};

export default NutritionTips;
