import React, { useState, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Award, QrCode, Globe } from "lucide-react";
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
  
  const languages = {
    en: { label: 'English', uploadLabel: 'Choose Photo', analyzing: 'Analyzing your food...' },
    hi: { label: 'हिंदी', uploadLabel: 'फोटो चुनें', analyzing: 'आपके भोजन का विश्लेषण करना...' },
    ta: { label: 'தமிழ்', uploadLabel: 'புகைப்படத்தைத் தேர்வுசெய்க', analyzing: 'உங்கள் உணவை ஆராய்கிறது...' },
    te: { label: 'తెలుగు', uploadLabel: 'ఫోటోను ఎంచుకోండి', analyzing: 'మీ ఆహారాన్ని విశ్లేషిస్తోంది...' }
  };

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
      
      // Award points for food tracking
      if (isHealthy) {
        toast({
          title: "Points Earned!",
          description: "You earned 10 points for eating healthy food!",
          variant: "default",
        });
      }
    }, 2000);
  };

  const handleLanguageChange = () => {
    const languages = ['en', 'hi', 'ta', 'te'];
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    setCurrentLanguage(languages[nextIndex]);
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
        description: "This feature is coming soon! It will detect food items and estimate calories in real-time.",
      });
    }
  };

  return (
    <div className="container page-container">
      <div className="diet-tracking-container max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold">📸 Diet Tracking</h2>
            <p className="text-muted-foreground">Upload your food photo to check if it's healthy or not</p>
          </div>
          <Button variant="outline" onClick={handleLanguageChange}>
            <Globe className="mr-2" />
            {languages[currentLanguage].label}
          </Button>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <span>Food Scanner</span>
              <div className="flex gap-2">
                <Badge 
                  className={`cursor-pointer ${scanMode === 'food' ? 'bg-primary' : 'bg-secondary'}`}
                  onClick={() => handleScanSelect('food')}
                >
                  <Camera size={14} className="mr-1" /> Food Scan
                </Badge>
                <Badge 
                  className={`cursor-pointer ${scanMode === 'barcode' ? 'bg-primary' : 'bg-secondary'}`}
                  onClick={() => handleScanSelect('barcode')}
                >
                  <QrCode size={14} className="mr-1" /> Barcode
                </Badge>
                <Badge 
                  className={`cursor-pointer ${scanMode === 'ar' ? 'bg-primary' : 'bg-secondary'}`}
                  onClick={() => handleScanSelect('ar')}
                >
                  <Award size={14} className="mr-1" /> AR Preview
                </Badge>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <Button 
                onClick={() => fileInputRef.current.click()}
                className="mb-4 w-full max-w-xs"
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
                <div className="w-full flex flex-col items-center">
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
                  <QrCode size={64} className="mx-auto mb-4 text-muted-foreground" />
                  <p>Tap "{languages[currentLanguage].uploadLabel}" to scan a food product barcode</p>
                  <p className="text-sm text-muted-foreground mt-2">Get immediate nutrition information and health assessment</p>
                </div>
              )}
              
              {scanMode === 'ar' && (
                <div className="border-2 border-dashed border-muted p-6 rounded-md w-full text-center mt-4">
                  <Camera size={64} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="font-semibold">Augmented Reality Food Scanner</p>
                  <p className="text-sm text-muted-foreground mt-2">Coming Soon! Scan your plate to get real-time nutritional information</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 space-y-8">
          <HabitTracker />
          <HealthPoints />
        </div>
      </div>
    </div>
  );
};

export default DietTracking;
