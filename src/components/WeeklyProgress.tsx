
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface WeeklyProgressProps {
  data: Array<{
    day: string;
    healthyMeals: number;
    unhealthyMeals: number;
  }>;
}

export const WeeklyProgress: React.FC<WeeklyProgressProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Meal Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <BarChart
            width={600}
            height={300}
            data={data}
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
  );
};
