
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FoodScanner } from '../components/FoodScanner';
import { WeeklyProgress } from '../components/WeeklyProgress';
import { languages } from '../constants/languages';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DietTracking = () => {
  const { currentUser } = useAuth();
  const [currentLanguage] = useState('en');
  
  const [weeklyData] = useState(() => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(day => ({
      day,
      healthyMeals: Math.floor(Math.random() * 5),
      unhealthyMeals: Math.floor(Math.random() * 3)
    }));
  });

  // Redirect to login if not authenticated
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Card className="mb-8 border-none shadow-none">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold">Diet Tracking</CardTitle>
          <p className="text-muted-foreground">Track your meals with AI-powered food recognition</p>
        </CardHeader>
      </Card>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Upload Food Image</CardTitle>
          </CardHeader>
          <CardContent>
            <FoodScanner
              currentLanguage={currentLanguage}
              languages={languages}
              hideControls={true}
              onScanComplete={() => {}}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <WeeklyProgress data={weeklyData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DietTracking;
