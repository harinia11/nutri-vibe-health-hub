import React, { useState } from 'react';
import { FoodScanner } from '../components/FoodScanner';
import { WeeklyProgress } from '../components/WeeklyProgress';
import { languages } from '../constants/languages';

const DietTracking = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  const [weeklyData] = useState(() => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(day => ({
      day,
      healthyMeals: Math.floor(Math.random() * 5),
      unhealthyMeals: Math.floor(Math.random() * 3)
    }));
  });

  const handleScanComplete = (isHealthy) => {
    // Keep basic scan handling for future functionality
    console.log('Food scan completed:', isHealthy);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Diet Tracking</h1>
        <p className="text-muted-foreground text-center">Track your meals with AI-powered food recognition</p>
      </div>

      <div className="grid gap-6">
        <FoodScanner
          currentLanguage={currentLanguage}
          languages={languages}
          onScanComplete={handleScanComplete}
        />
        <WeeklyProgress data={weeklyData} />
      </div>
    </div>
  );
};

export default DietTracking;
