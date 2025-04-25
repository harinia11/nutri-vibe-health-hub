import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your NutriVibe assistant. Ask me anything about nutrition or your health conditions!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Nutrition recommendation data
  const nutritionData = [
    { 
      condition: "diabetes", 
      food: "Whole grains", 
      benefits: "Controls blood sugar", 
      avoid: "White rice",
      nutrients: "Fiber",
      alternatives: "Quinoa" 
    },
    { 
      condition: "hypertension", 
      food: "Leafy greens", 
      benefits: "Lowers blood pressure", 
      avoid: "Processed food",
      nutrients: "Potassium",
      alternatives: "Kale" 
    },
    { 
      condition: "anemia", 
      food: "Spinach", 
      benefits: "Increases hemoglobin levels", 
      avoid: "Caffeine",
      nutrients: "Iron",
      alternatives: "Beetroot" 
    },
    { 
      condition: "obesity", 
      food: "Lean protein", 
      benefits: "Supports weight loss", 
      avoid: "Sugary drinks",
      nutrients: "Protein",
      alternatives: "Grilled chicken" 
    },
    { 
      condition: "heart disease", 
      food: "Salmon", 
      benefits: "Improves heart health", 
      avoid: "Fried food",
      nutrients: "Omega-3",
      alternatives: "Tuna" 
    },
    { 
      condition: "osteoporosis", 
      food: "Dairy", 
      benefits: "Strengthens bones", 
      avoid: "Soft drinks",
      nutrients: "Calcium",
      alternatives: "Almond milk" 
    },
    { 
      condition: "pcos", 
      food: "Nuts", 
      benefits: "Balances hormones", 
      avoid: "Dairy",
      nutrients: "Healthy fats",
      alternatives: "Walnuts" 
    },
    { 
      condition: "acid reflux", 
      food: "Ginger tea", 
      benefits: "Soothes digestion", 
      avoid: "Spicy food",
      nutrients: "Anti-inflammatory",
      alternatives: "Chamomile tea" 
    },
    { 
      condition: "migraine", 
      food: "Magnesium-rich foods", 
      benefits: "Reduces migraine frequency", 
      avoid: "Processed meats",
      nutrients: "Magnesium",
      alternatives: "Cashews" 
    },
    { 
      condition: "liver disease", 
      food: "Green tea", 
      benefits: "Supports liver function", 
      avoid: "Alcohol",
      nutrients: "Antioxidants",
      alternatives: "Lemon water" 
    },
    { 
      condition: "asthma", 
      food: "Omega-3 foods", 
      benefits: "Reduces airway inflammation", 
      avoid: "Dairy",
      nutrients: "Omega-3",
      alternatives: "Mackerel" 
    },
    { 
      condition: "thyroid disorder", 
      food: "Iodine-rich foods", 
      benefits: "Supports thyroid function", 
      avoid: "Soy",
      nutrients: "Iodine",
      alternatives: "Seaweed" 
    },
    { 
      condition: "high cholesterol", 
      food: "Oats", 
      benefits: "Reduces LDL cholesterol", 
      avoid: "Fried foods",
      nutrients: "Soluble fiber",
      alternatives: "Chia seeds" 
    },
    { 
      condition: "depression", 
      food: "Dark chocolate", 
      benefits: "Boosts serotonin", 
      avoid: "Alcohol",
      nutrients: "Antioxidants",
      alternatives: "Almonds" 
    },
    { 
      condition: "kidney disease", 
      food: "Cranberries", 
      benefits: "Supports kidney health", 
      avoid: "Red meat",
      nutrients: "Antioxidants",
      alternatives: "Blueberries" 
    },
    { 
      condition: "arthritis", 
      food: "Turmeric", 
      benefits: "Reduces inflammation", 
      avoid: "Processed meats",
      nutrients: "Curcumin",
      alternatives: "Ginger" 
    },
    { 
      condition: "stroke recovery", 
      food: "Berries", 
      benefits: "Supports brain function", 
      avoid: "Salty foods",
      nutrients: "Antioxidants",
      alternatives: "Pomegranate" 
    },
    { 
      condition: "lactose intolerance", 
      food: "Almond milk", 
      benefits: "Dairy alternative", 
      avoid: "Milk",
      nutrients: "Calcium",
      alternatives: "Soy milk" 
    },
    { 
      condition: "gout", 
      food: "Cherries", 
      benefits: "Lowers uric acid", 
      avoid: "Organ meats",
      nutrients: "Antioxidants",
      alternatives: "Strawberries" 
    },
    { 
      condition: "menopause", 
      food: "Flaxseeds", 
      benefits: "Balances hormones", 
      avoid: "Caffeine",
      nutrients: "Phytoestrogens",
      alternatives: "Sesame seeds" 
    },
    { 
      condition: "liver fatty disease", 
      food: "Green leafy vegetables", 
      benefits: "Supports liver detox", 
      avoid: "Alcohol",
      nutrients: "Fiber",
      alternatives: "Broccoli" 
    },
    { 
      condition: "digestive issues", 
      food: "Probiotic yogurt", 
      benefits: "Supports gut health", 
      avoid: "Processed food",
      nutrients: "Probiotics",
      alternatives: "Kefir" 
    },
    { 
      condition: "skin acne", 
      food: "Avocado", 
      benefits: "Nourishes skin", 
      avoid: "Sugar",
      nutrients: "Healthy fats",
      alternatives: "Walnuts" 
    },
    { 
      condition: "chronic fatigue", 
      food: "Bananas", 
      benefits: "Boosts energy", 
      avoid: "Processed sugar",
      nutrients: "Magnesium",
      alternatives: "Dates" 
    },
    { 
      condition: "type 2 diabetes", 
      food: "Quinoa", 
      benefits: "Regulates blood sugar", 
      avoid: "Sugary drinks",
      nutrients: "Fiber",
      alternatives: "Brown rice" 
    },
    { 
      condition: "gallbladder issues", 
      food: "Beets", 
      benefits: "Supports bile flow", 
      avoid: "Fried foods",
      nutrients: "Betaine",
      alternatives: "Artichokes" 
    },
    { 
      condition: "chronic stress", 
      food: "Green tea", 
      benefits: "Reduces stress", 
      avoid: "Caffeine",
      nutrients: "L-Theanine",
      alternatives: "Chamomile tea" 
    },
    { 
      condition: "liver cirrhosis", 
      food: "Garlic", 
      benefits: "Supports liver detox", 
      avoid: "Alcohol",
      nutrients: "Sulfur compounds",
      alternatives: "Onions" 
    },
    { 
      condition: "seasonal allergies", 
      food: "Local honey", 
      benefits: "Builds immunity", 
      avoid: "Dairy",
      nutrients: "Antioxidants",
      alternatives: "Ginger" 
    },
    { 
      condition: "prostate health", 
      food: "Tomatoes", 
      benefits: "Supports prostate health", 
      avoid: "Processed meats",
      nutrients: "Lycopene",
      alternatives: "Watermelon" 
    },
    { 
      condition: "pregnancy", 
      food: "Ginger tea", 
      benefits: "Reduces nausea", 
      avoid: "Caffeine",
      nutrients: "Gingerol",
      alternatives: "Peppermint tea" 
    },
    { 
      condition: "rheumatoid arthritis", 
      food: "Turmeric", 
      benefits: "Reduces inflammation", 
      avoid: "Processed meats",
      nutrients: "Curcumin",
      alternatives: "Ginger" 
    }
  ];

  // Generic responses for common greetings
  const genericResponses = {
    "hello": "Hello! How can I help you with your nutrition today?",
    "hi": "Hi there! Ask me about nutrition for specific health conditions!",
    "hey": "Hey! What nutrition advice are you looking for today?",
    "help": "I can provide nutrition recommendations for various health conditions. Try asking me about foods for diabetes, heart disease, or other conditions.",
    "thanks": "You're welcome! Is there anything else I can help you with?",
    "thank you": "You're welcome! Feel free to ask if you need more nutrition advice.",
    "bye": "Goodbye! Remember to make healthy food choices!",
    "food": "A balanced diet consists of proteins, carbohydrates, fats, vitamins, and minerals. Try to include a variety of colorful fruits and vegetables in your meals."
  };

  // Initialize speech recognition
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        handleVoiceInput(transcript);
      };
      
      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  // Scroll to bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current.abort();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.error('Speech recognition error:', error);
      }
    }
  };

  const handleVoiceInput = (voiceText) => {
    if (!voiceText.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: voiceText, sender: 'user' }]);
    processUserInput(voiceText);
  };

  const processUserInput = (userInput) => {
    // Process user input and get response
    setTimeout(() => {
      const input = userInput.toLowerCase();
      
      // Check for generic responses first
      for (const [keyword, response] of Object.entries(genericResponses)) {
        if (input === keyword || input.includes(` ${keyword} `) || input.startsWith(`${keyword} `) || input.endsWith(` ${keyword}`)) {
          setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
          setInput('');
          return;
        }
      }
      
      // Check for voice commands like "Hey NutriBot, suggest a diet for thyroid"
      if (input.includes("hey nutribot") || input.includes("hey nutri bot")) {
        if (input.includes("suggest") || input.includes("recommend")) {
          // Extract condition from the query
          const conditions = nutritionData.map(item => item.condition);
          for (const condition of conditions) {
            if (input.includes(condition)) {
              const item = nutritionData.find(item => item.condition === condition);
              const response = `For ${item.condition}, I recommend eating ${item.food} which contains ${item.nutrients}. It ${item.benefits}. You should avoid ${item.avoid}. An alternative option is ${item.alternatives}.`;
              setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
              setInput('');
              return;
            }
          }
        }
      }
      
      // Check for health conditions in the nutrition data
      let matchedCondition = false;
      
      for (const item of nutritionData) {
        if (input.includes(item.condition)) {
          const response = `For ${item.condition}, I recommend eating ${item.food} which contains ${item.nutrients}. It ${item.benefits}. You should avoid ${item.avoid}. An alternative option is ${item.alternatives}.`;
          setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
          matchedCondition = true;
          break;
        }
      }
      
      // If no specific condition matched, look for food related keywords
      if (!matchedCondition) {
        if (input.includes("food") && input.includes("for")) {
          // Extract possible condition from the query
          for (const item of nutritionData) {
            if (input.includes(item.condition)) {
              const response = `Good foods for ${item.condition} include ${item.food}. It ${item.benefits} and provides ${item.nutrients}.`;
              setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
              matchedCondition = true;
              break;
            }
          }
        } else if (input.includes("benefit") || input.includes("good for")) {
          // Check if any foods are mentioned
          for (const item of nutritionData) {
            if (input.includes(item.food.toLowerCase())) {
              const response = `${item.food} ${item.benefits}. It's rich in ${item.nutrients} and is good for people with ${item.condition}.`;
              setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
              matchedCondition = true;
              break;
            }
          }
        }
      }
      
      // If still no match, give a general response
      if (!matchedCondition) {
        setMessages(prev => [...prev, { 
          text: "I'm not sure about that specific condition or food. Try asking about common health conditions like diabetes, hypertension, or heart disease, or ask for general nutrition advice.", 
          sender: 'bot' 
        }]);
      }
      
      setInput('');
    }, 1000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, sender: 'user' }]);
    processUserInput(input);
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
          placeholder="Ask about foods for specific health conditions..."
        />
        <button 
          type="button" 
          onClick={toggleListening} 
          className={`voice-btn ${isListening ? 'active' : ''}`}
        >
          {isListening ? <MicOff size={20} /> : <Mic size={20} />}
        </button>
        <button type="submit" className="btn">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
