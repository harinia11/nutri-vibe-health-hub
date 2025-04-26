
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress";
import { StarIcon, Award, Badge } from 'lucide-react';

const HealthPoints = ({ points = 150, earnedBadges = [], nextMilestone = 200 }) => {
  const progress = (points / nextMilestone) * 100;
  
  const defaultBadges = [
    { name: "Healthy Hero", unlocked: true, description: "Eat healthy for 7 days straight" },
    { name: "Nutrition Master", unlocked: true, description: "Track 50 meals" },
    { name: "Meal Master", unlocked: false, description: "Follow 3 meal plans completely" },
    { name: "Super Eater", unlocked: false, description: "Maintain a healthy diet for 30 days" },
    { name: "Nutrition Ninja", unlocked: false, description: "Identify 20 healthy food alternatives" },
  ];
  
  // Combine default badges with user-earned badges
  const badges = defaultBadges.map(badge => {
    const userBadge = earnedBadges.find(b => b.name === badge.name);
    if (userBadge) {
      return { ...badge, unlocked: true, earnedAt: userBadge.earnedAt };
    }
    
    // Add user earned badges that are not in default badges
    const extraBadges = earnedBadges
      .filter(b => !defaultBadges.some(db => db.name === b.name))
      .map(b => ({ ...b, unlocked: true }));
    
    return badge;
  });
  
  // Add any extra badges that aren't in the defaults
  const allBadges = [
    ...badges,
    ...earnedBadges.filter(b => !badges.some(db => db.name === b.name))
      .map(b => ({ ...b, unlocked: true }))
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Reward System</span>
          <span className="flex items-center text-amber-500 text-xl">
            <StarIcon className="mr-2" fill="currentColor" />
            {points} Points
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between mb-2 text-sm">
            <span>Progress to next milestone</span>
            <span>{points}/{nextMilestone}</span>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-muted-foreground mt-2">
            Earn {nextMilestone - points} more points to unlock your next badge
          </p>
        </div>
        
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <Award className="text-primary" />
            <h3 className="font-semibold">Badges & Achievements</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {allBadges.map((badge, index) => (
              <div 
                key={badge.name || index}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  badge.unlocked ? 'border-primary bg-primary/5' : 'border-muted-foreground/20 bg-muted/50'
                }`}
              >
                <Badge size={20} className={badge.unlocked ? 'text-primary' : 'text-muted-foreground/50'} />
                <div>
                  <div className={badge.unlocked ? 'font-medium text-primary' : 'font-medium text-muted-foreground'}>
                    {badge.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {badge.description}
                    {badge.unlocked && badge.earnedAt && (
                      <span className="block mt-1 text-xs text-primary/70">
                        Earned on {new Date(badge.earnedAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthPoints;
