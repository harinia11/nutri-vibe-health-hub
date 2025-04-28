
import React, { useState, useRef, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Award, QrCode, Globe } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import HabitTracker from '../components/HabitTracker';
import HealthPoints from '../components/HealthPoints';

const DietTracking = () => {
  const { toast } = useToast();
  const fileInputRef = useRef(null);
  const [imageURL, setImageURL] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [maxPred, setMaxPred] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scanMode, setScanMode] = useState('food'); // 'food', 'barcode', 'ar'
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  // Health tracking states
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

  // Badge definitions
  const badgeThresholds = [
    { count: 3, name: "Healthy Starter", description: "Track 3 healthy meals" },
    { count: 5, name: "Super Eater", description: "Track 5 healthy meals" },
    { count: 10, name: "Nutrition Hero", description: "Track 10 healthy meals" },
    { count: 20, name: "Meal Master", description: "Track 20 healthy meals" },
    { count: 30, name: "Nutrition Ninja", description: "Track 30 healthy meals" },
  ];
  
  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('healthyCount', healthyCount.toString());
    localStorage.setItem('healthPoints', points.toString());
    localStorage.setItem('earnedBadges', JSON.stringify(badges));
  }, [healthyCount, points, badges]);
  
  // Check for new badges
  useEffect(() => {
    badgeThresholds.forEach(badge => {
      if (healthyCount >= badge.count && !badges.some(b => b.name === badge.name)) {
        const newBadge = { name: badge.name, description: badge.description, earnedAt: new Date().toISOString() };
        setBadges(prev => [...prev, newBadge]);
        
        toast({
          title: "New Badge Earned!",
          description: `Congratulations! You've earned the "${badge.name}" badge!`,
          variant: "default",
        });
      }
    });
  }, [healthyCount, badges, toast]);
  
  const languages = {
    en: { 
      label: 'English', 
      uploadLabel: 'Choose Photo', 
      analyzing: 'Analyzing your food...',
      healthyResult: 'Healthy food detected! +10 points',
      unhealthyResult: 'This food may not be the healthiest choice',
      scanFood: 'Food Scan',
      scanBarcode: 'Barcode',
      scanAR: 'AR Preview',
      points: 'Points',
      badges: 'Badges'
    },
    hi: { 
      label: 'हिंदी', 
      uploadLabel: 'फोटो चुनें', 
      analyzing: 'आपके भोजन का विश्लेषण करना...',
      healthyResult: 'स्वस्थ भोजन का पता चला! +10 अंक',
      unhealthyResult: 'यह भोजन सबसे स्वस्थ विकल्प नहीं हो सकता है',
      scanFood: 'खाना स्कैन',
      scanBarcode: 'बारकोड',
      scanAR: 'एआर प्रीव्यू',
      points: 'अंक',
      badges: 'बैज'
    },
    ta: { 
      label: 'தமிழ்', 
      uploadLabel: 'புகைப்படத்தைத் தேர்வுசெய்க', 
      analyzing: 'உங்கள் உணவை ஆராய்கிறது...',
      healthyResult: 'ஆரோக்கியமான உணவு கண்டறியப்பட்டது! +10 புள்ளிகள்',
      unhealthyResult: 'இந்த உணவு ஆரோக்கியமான தேர்வாக இல்லாமல் இருக்கலாம்',
      scanFood: 'உணவு ஸ்கேன்',
      scanBarcode: 'பார்கோடு',
      scanAR: 'AR முன்னோட்டம்',
      points: 'புள்ளிகள்',
      badges: 'பதக்கங்கள்'
    },
    te: { 
      label: 'తెలుగు', 
      uploadLabel: 'ఫోటోను ఎంచుకోండి', 
      analyzing: 'మీ ఆహారాన్ని విశ్లేషిస్తోంది...',
      healthyResult: 'ఆరోగ్యకరమైన ఆహారం కనుగొనబడింది! +10 పాయింట్లు',
      unhealthyResult: 'ఈ ఆహారం ఆరోగ్యకరమైన ఎంపిక కాకపోవచ్చు',
      scanFood: 'ఆహారం స్కాన్',
      scanBarcode: 'బార్కోడ్',
      scanAR: 'AR ప్రివ్యూ',
      points: 'పాయింట్లు',
      badges: 'బ్యాడ్జీలు'
    }
  };

  const [weeklyData] = useState(() => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(day => ({
      day,
      healthyMeals: Math.floor(Math.random() * 5),
      unhealthyMeals: Math.floor(Math.random() * 3)
    }));
  });

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
      
      // Award points for healthy food
      if (isHealthy) {
        // Increase healthy count
        setHealthyCount(prevCount => prevCount + 1);
        
        // Award points
        setPoints(prevPoints => prevPoints + 10);
        
        toast({
          title: "Points Earned!",
          description: languages[currentLanguage].healthyResult,
          variant: "default",
        });
      }
    }, 2000);
  };

  const handleLanguageChange = () => {
    const languageKeys = Object.keys(languages);
    const currentIndex = languageKeys.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languageKeys.length;
    setCurrentLanguage(languageKeys[nextIndex]);
  };

  const handleScanSelect = (mode) => {
    setScanMode(mode);
    if (mode === 'barcode') {
      toast({
        title: "Barcode Scanner",
        description: "Scan product barcodes to get nutrition information",
      });
    } else if (mode === 'ar') {
      toast({
        title: "AR Feature",
        description: "This feature will detect food items and estimate calories in real-time.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Diet Tracking</h1>
            <p className="text-muted-foreground">Track your meals and earn rewards for healthy eating habits</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
              <Award className="h-4 w-4 text-primary" />
              <span className="font-medium">{points} {languages[currentLanguage].points}</span>
            </div>
            <Button variant="outline" onClick={handleLanguageChange}>
              <Globe className="mr-2 h-4 w-4" />
              {languages[currentLanguage].label}
            </Button>
          </div>
        </div>
      </div>

      {/* Food Scanner Section */}
      <div className="grid gap-6">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex flex-col sm:flex-row sm:justify-between gap-3">
              <span>Food Scanner</span>
              <div className="flex gap-2 flex-wrap">
                <Badge 
                  className={`cursor-pointer ${scanMode === 'food' ? 'bg-primary' : 'bg-secondary'}`}
                  onClick={() => handleScanSelect('food')}
                >
                  <Camera className="mr-1 h-4 w-4" /> {languages[currentLanguage].scanFood}
                </Badge>
                <Badge 
                  className={`cursor-pointer ${scanMode === 'barcode' ? 'bg-primary' : 'bg-secondary'}`}
                  onClick={() => handleScanSelect('barcode')}
                >
                  <QrCode className="mr-1 h-4 w-4" /> {languages[currentLanguage].scanBarcode}
                </Badge>
                <Badge 
                  className={`cursor-pointer ${scanMode === 'ar' ? 'bg-primary' : 'bg-secondary'}`}
                  onClick={() => handleScanSelect('ar')}
                >
                  <Award className="mr-1 h-4 w-4" /> {languages[currentLanguage].scanAR}
                </Badge>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <Button 
                onClick={() => fileInputRef.current.click()}
                className="w-full max-w-xs"
              >
                {languages[currentLanguage].uploadLabel}
              </Button>
              <input 
                ref={fileInputRef}
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload}
                className="hidden"
              />

              {loading && (
                <div className="flex items-center p-4">
                  <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mr-3"></div>
                  <p>{languages[currentLanguage].analyzing}</p>
                </div>
              )}

              {imageURL && !loading && (
                <div className="w-full flex flex-col items-center space-y-4">
                  <img src={imageURL} alt="preview" className="max-w-full max-h-96 object-contain rounded-lg" />
                  {prediction && (
                    <div className={`mt-4 p-4 w-full rounded-lg text-center ${
                      prediction === 'Healthy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      🧠 AI Prediction: <strong>{prediction}</strong> ({maxPred}% confidence)
                    </div>
                  )}
                </div>
              )}
              
              {scanMode === 'barcode' && (
                <div className="border-2 border-dashed border-muted p-6 rounded-md w-full text-center mt-4">
                  <QrCode className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <p>Tap "{languages[currentLanguage].uploadLabel}" to scan a food product barcode</p>
                  <p className="text-sm text-muted-foreground mt-2">Get immediate nutrition information and health assessment</p>
                </div>
              )}
              
              {scanMode === 'ar' && (
                <div className="border-2 border-dashed border-muted p-6 rounded-md w-full text-center mt-4">
                  <Camera className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <p className="font-semibold">Augmented Reality Food Scanner</p>
                  <p className="text-sm text-muted-foreground mt-2">Scan your plate to get real-time nutritional information</p>
                  <Button 
                    className="mt-4" 
                    onClick={() => toast({
                      title: "AR Scanner",
                      description: "This feature will be available soon. It will analyze your food in real-time!"
                    })}
                  >
                    Try AR Scanner
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Analysis Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Meal Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full overflow-x-auto">
              <BarChart
                width={600}
                height={300}
                data={weeklyData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="healthyMeals" fill="#4ade80" name="Healthy Meals" />
                <Bar dataKey="unhealthyMeals" fill="#f87171" name="Unhealthy Meals" />
              </BarChart>
            </div>
          </CardContent>
        </Card>

        {/* Habits and Points Section */}
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

