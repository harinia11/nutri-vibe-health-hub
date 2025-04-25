
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckIcon, CalendarDaysIcon } from 'lucide-react';

const HabitTracker = () => {
  const [habits, setHabits] = useState({
    water: 0,
    sleep: 0,
    exercise: false,
    healthyMeal: false
  });

  const [streak, setStreak] = useState({
    days: 7,
    achievement: "Healthy Eating Streak!"
  });

  const incrementWater = () => {
    setHabits(prev => ({ ...prev, water: prev.water + 1 }));
  };

  const toggleHabit = (habit) => {
    setHabits(prev => ({ ...prev, [habit]: !prev[habit] }));
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Daily Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Water Glasses</span>
              <div className="flex items-center gap-2">
                <span>{habits.water}/8</span>
                <Button onClick={incrementWater} size="sm">+</Button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Healthy Meal</span>
              <Button 
                onClick={() => toggleHabit('healthyMeal')}
                variant={habits.healthyMeal ? "default" : "outline"}
                size="sm"
              >
                <CheckIcon className={habits.healthyMeal ? "opacity-100" : "opacity-50"} />
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Exercise</span>
              <Button 
                onClick={() => toggleHabit('exercise')}
                variant={habits.exercise ? "default" : "outline"}
                size="sm"
              >
                <CheckIcon className={habits.exercise ? "opacity-100" : "opacity-50"} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Streaks & Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 text-lg">
            <CalendarDaysIcon />
            <span>{streak.days} Day Streak!</span>
          </div>
          <p className="text-muted-foreground mt-2">{streak.achievement}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HabitTracker;
