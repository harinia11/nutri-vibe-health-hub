
import React, { useState, useEffect } from 'react';
import { Globe } from "lucide-react";
import { Button } from '@/components/ui/button';
import HabitTracker from '../components/HabitTracker';
import HealthPoints from '../components/HealthPoints';
import { FoodScanner } from '../components/FoodScanner';
import { WeeklyProgress } from '../components/WeeklyProgress';
import { languages } from '../constants/languages';

const DietTracking = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [healthyCount, setHealthyCount] = useState(() => {
    const saved = localStorage.getItem('healthyCount');
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem('healthPoints');
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [badges, setBadges] = useState(() => {
    const saved = localStorage.getItem('earnedBadges');
    return saved ? JSON.parse(saved) : [];
  });

  const [weeklyData] = useState(() => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(day => ({
      day,
      healthyMeals: Math.floor(Math.random() * 5),
      unhealthyMeals: Math.floor(Math.random() * 3)
    }));
  });

  // Badge definitions
  const badgeThresholds = [
    { count: 3, name: "Healthy Starter", description: "Track 3 healthy meals" },
    { count: 5, name: "Super Eater", description: "Track 5 healthy meals" },
    { count: 10, name: "Nutrition Hero", description: "Track 10 healthy meals" },
    { count: 20, name: "Meal Master", description: "Track 20 healthy meals" },
    { count: 30, name: "Nutrition Ninja", description: "Track 30 healthy meals" },
  ];

  useEffect(() => {
    localStorage.setItem('healthyCount', healthyCount.toString());
    localStorage.setItem('healthPoints', points.toString());
    localStorage.setItem('earnedBadges', JSON.stringify(badges));
  }, [healthyCount, points, badges]);

  const handleLanguageChange = () => {
    const languageKeys = Object.keys(languages);
    const currentIndex = languageKeys.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languageKeys.length;
    setCurrentLanguage(languageKeys[nextIndex]);
  };

  const handleScanComplete = (isHealthy) => {
    if (isHealthy) {
      setHealthyCount(prevCount => prevCount + 1);
      setPoints(prevPoints => prevPoints + 10);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Diet Tracking</h1>
            <p className="text-muted-foreground">Track your meals and earn rewards for healthy eating habits</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
              <span className="font-medium">{points} {languages[currentLanguage].points}</span>
            </div>
            <Button variant="outline" onClick={handleLanguageChange}>
              <Globe className="mr-2 h-4 w-4" />
              {languages[currentLanguage].label}
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <FoodScanner
          currentLanguage={currentLanguage}
          languages={languages}
          onScanComplete={handleScanComplete}
        />

        <WeeklyProgress data={weeklyData} />

        <div className="grid gap-6 md:grid-cols-2">
          <HabitTracker />
          <div className="space-y-6">
            <HealthPoints 
              points={points} 
              earnedBadges={badges} 
              nextMilestone={
                badgeThresholds.find(badge => !badges.some(b => b.name === badge.name))?.count || 50
              } 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietTracking;
