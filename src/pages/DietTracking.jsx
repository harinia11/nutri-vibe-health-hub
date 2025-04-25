import React, { useState } from 'react';
import HabitTracker from '../components/HabitTracker';
import HealthPoints from '../components/HealthPoints';

const DietTracking = () => {
  const [imageURL, setImageURL] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [maxPred, setMaxPred] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImageURL(imageURL);
    setLoading(true);

    // Simulate AI prediction (in real app, this would use the Teachable Machine model)
    setTimeout(() => {
      // Random prediction for demo purposes
      const isHealthy = Math.random() > 0.5;
      setPrediction(isHealthy ? "Healthy" : "Unhealthy");
      setMaxPred((Math.random() * 20 + 80).toFixed(2)); // Random confidence between 80-100%
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container page-container">
      <div className="diet-tracking-container">
        <h2>📸 Diet Tracking</h2>
        <p>Upload your food photo to check if it's healthy or not</p>
        
        <label className="btn" style={{ 
          display: 'block', 
          maxWidth: '200px', 
          margin: '20px auto',
          position: 'relative', 
          overflow: 'hidden' 
        }}>
          Choose Photo
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              opacity: 0, 
              width: '100%', 
              height: '100%', 
              cursor: 'pointer' 
            }} 
          />
        </label>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p style={{ marginLeft: '10px' }}>Analyzing your food...</p>
          </div>
        )}

        {imageURL && !loading && (
          <>
            <img src={imageURL} alt="preview" className="preview-image" />
            {prediction && (
              <div className={`message ${prediction === 'Healthy' ? 'success' : 'error'}`}>
                🧠 AI Prediction: <strong>{prediction}</strong> ({maxPred}% confidence)
              </div>
            )}
          </>
        )}

        <div className="mt-8">
          <HabitTracker />
          <HealthPoints />
        </div>
      </div>
    </div>
  );
};

export default DietTracking;
