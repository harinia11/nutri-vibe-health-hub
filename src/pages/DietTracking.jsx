
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { WeeklyProgress } from '../components/WeeklyProgress';
import { Camera } from 'lucide-react';

const DietTracking = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState("");

  const [weeklyData] = useState(() => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(day => ({
      day,
      healthyMeals: Math.floor(Math.random() * 5),
      unhealthyMeals: Math.floor(Math.random() * 3)
    }));
  });

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImageURL(imageURL);
    setLoading(true);

    // Simulate AI prediction
    setTimeout(() => {
      const isHealthy = Math.random() > 0.5;
      setPrediction(isHealthy ? "Healthy" : "Unhealthy");
      setLoading(false);
    }, 2000);
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Diet Tracking</h1>
        <p className="text-muted-foreground text-center">Track your meals with AI-powered food recognition</p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Food Scanner</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <Button 
                onClick={() => document.getElementById('imageUpload').click()}
                className="w-full max-w-xs"
              >
                <Camera className="mr-2 h-4 w-4" />
                Upload Food Image
              </Button>
              <input 
                id="imageUpload"
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload}
                className="hidden"
              />

              {loading && (
                <div className="flex items-center p-4">
                  <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mr-3"></div>
                  <p>Analyzing your food...</p>
                </div>
              )}

              {imageURL && !loading && (
                <div className="w-full flex flex-col items-center space-y-4">
                  <img src={imageURL} alt="Food preview" className="max-w-full max-h-96 object-contain rounded-lg" />
                  {prediction && (
                    <div className={`mt-4 p-4 w-full rounded-lg text-center ${
                      prediction === 'Healthy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      AI Prediction: <strong>{prediction}</strong>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <WeeklyProgress data={weeklyData} />
      </div>
    </div>
  );
};

export default DietTracking;
