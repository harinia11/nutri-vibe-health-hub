import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import MotivationalQuote from '../components/MotivationalQuote';

const Home = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  const username = currentUser.email.split('@')[0];

  const features = [
    {
      title: 'Meal Plans',
      description: 'Discover healthy and delicious meal plans tailored to your preferences.',
      icon: '🍽️',
      link: '/meal-plans'
    },
    {
      title: 'Nutrition Tips',
      description: 'Get expert nutrition advice and tips for a healthier lifestyle.',
      icon: '💡',
      link: '/nutrition-tips'
    },
    {
      title: 'Healthy Shopping',
      description: 'Shop for nutritious ingredients and health foods.',
      icon: '🛒',
      link: '/shopping'
    },
    {
      title: 'Diet Tracking',
      description: 'Track your food choices and get feedback on your diet.',
      icon: '📊',
      link: '/diet-tracking'
    }
  ];

  return (
    <div>
      <section className="hero">
        <h1>Welcome back, {username}! 👋</h1>
        <p>Your personal guide to healthy eating and nutrition. Discover meal plans, nutrition tips, and more.</p>
        <Link to="/nutrition-tips" className="btn btn-lg">Get Started</Link>
      </section>

      <div className="container">
        <MotivationalQuote />

        <section className="features">
          <h2>Enhance Your Wellness Journey</h2>
          <div className="grid">
            {features.map((feature, index) => (
              <div key={index} className="card feature-card">
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to={feature.link} className="btn">Explore</Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
