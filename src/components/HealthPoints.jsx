
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

const HealthPoints = () => {
  const points = 150;
  const badges = [
    { name: "Healthy Hero", unlocked: true },
    { name: "Meal Master", unlocked: false },
  ];

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Health Points & Badges</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-lg font-semibold mb-4">
          <StarIcon className="text-yellow-500" />
          <span>{points} Points</span>
        </div>
        <div className="grid gap-2">
          {badges.map((badge) => (
            <div 
              key={badge.name}
              className={`p-2 rounded-lg border ${
                badge.unlocked ? 'bg-primary/10 border-primary' : 'bg-muted border-muted-foreground/20'
              }`}
            >
              <span className={badge.unlocked ? 'text-primary' : 'text-muted-foreground'}>
                {badge.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthPoints;
