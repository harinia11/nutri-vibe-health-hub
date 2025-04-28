
import React, { useRef, useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, QrCode, Award } from "lucide-react";

interface FoodScannerProps {
  currentLanguage: string;
  languages: any;
  onScanComplete: (isHealthy: boolean) => void;
}

export const FoodScanner: React.FC<FoodScannerProps> = ({
  currentLanguage,
  languages,
  onScanComplete
}) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [prediction, setPrediction] = useState("");
  const [maxPred, setMaxPred] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [scanMode, setScanMode] = useState<'food' | 'barcode' | 'ar'>('food');

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImageURL(imageURL);
    setLoading(true);

    // Simulate AI prediction
    setTimeout(() => {
      const isHealthy = Math.random() > 0.5;
      setPrediction(isHealthy ? "Healthy" : "Unhealthy");
      setMaxPred((Math.random() * 20 + 80));
      setLoading(false);
      onScanComplete(isHealthy);
    }, 2000);
  };

  const handleScanSelect = (mode: 'food' | 'barcode' | 'ar') => {
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
            onClick={() => fileInputRef.current?.click()}
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
                  🧠 AI Prediction: <strong>{prediction}</strong> ({maxPred?.toFixed(2)}% confidence)
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
