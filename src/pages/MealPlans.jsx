
import React, { useState } from 'react';

const MealPlans = () => {
  const [mealPlans, setMealPlans] = useState([
    {
      id: 1,
      title: 'Vegetarian Week Plan',
      description: 'A balanced vegetarian meal plan for the entire week.',
      image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      calories: '1800-2000',
      duration: '7 days',
      recipes: [
        {
          name: 'Spinach and Chickpea Curry',
          ingredients: ['Spinach', 'Chickpeas', 'Coconut Milk', 'Spices'],
          instructions: 'Sauté onions, add spices, then chickpeas and spinach. Simmer with coconut milk.',
          youtubeLink: 'https://www.youtube.com/watch?v=example1'
        },
        {
          name: 'Quinoa Bowl with Roasted Vegetables',
          ingredients: ['Quinoa', 'Bell Peppers', 'Zucchini', 'Olive Oil'],
          instructions: 'Cook quinoa. Roast vegetables. Combine and add dressing.',
          youtubeLink: 'https://www.youtube.com/watch?v=example2'
        }
      ]
    },
    {
      id: 2,
      title: 'High Protein Plan',
      description: 'Build muscle with this protein-rich meal plan.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      calories: '2200-2400',
      duration: '5 days',
      recipes: [
        {
          name: 'Grilled Chicken Salad',
          ingredients: ['Chicken Breast', 'Mixed Greens', 'Cherry Tomatoes', 'Olive Oil'],
          instructions: 'Grill chicken. Prepare salad. Combine with a light dressing.',
          youtubeLink: 'https://www.youtube.com/watch?v=example3'
        },
        {
          name: 'Salmon with Quinoa',
          ingredients: ['Salmon Fillet', 'Quinoa', 'Lemon', 'Dill'],
          instructions: 'Bake salmon with lemon and herbs. Serve with cooked quinoa.',
          youtubeLink: 'https://www.youtube.com/watch?v=example4'
        }
      ]
    },
    {
      id: 3,
      title: 'Mediterranean Diet',
      description: 'Heart-healthy meals inspired by Mediterranean cuisine.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      calories: '1900-2100',
      duration: '14 days',
      recipes: [
        {
          name: 'Greek Salad',
          ingredients: ['Cucumber', 'Tomatoes', 'Feta Cheese', 'Olives'],
          instructions: 'Chop vegetables, combine with feta and olives, dress with olive oil and herbs.',
          youtubeLink: 'https://www.youtube.com/watch?v=example5'
        },
        {
          name: 'Baked Fish with Herbs',
          ingredients: ['White Fish', 'Lemon', 'Fresh Herbs', 'Olive Oil'],
          instructions: 'Season fish, add lemon slices and herbs, bake until flaky.',
          youtubeLink: 'https://www.youtube.com/watch?v=example6'
        }
      ]
    },
    {
      id: 4,
      title: 'Low Carb Plan',
      description: 'Reduce carb intake with these delicious meal options.',
      image: 'https://images.unsplash.com/photo-1488516785564-8655d7c2c648?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      calories: '1600-1800',
      duration: '10 days',
      recipes: [
        {
          name: 'Cauliflower Rice with Grilled Vegetables',
          ingredients: ['Cauliflower', 'Bell Peppers', 'Zucchini', 'Herbs'],
          instructions: 'Process cauliflower into rice, sauté. Grill vegetables and combine.',
          youtubeLink: 'https://www.youtube.com/watch?v=example7'
        },
        {
          name: 'Avocado and Egg Breakfast',
          ingredients: ['Avocado', 'Eggs', 'Cherry Tomatoes', 'Herbs'],
          instructions: 'Halve avocados, remove pit. Crack eggs into hollow, bake until set.',
          youtubeLink: 'https://www.youtube.com/watch?v=example8'
        }
      ]
    }
  ]);

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container page-container">
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Meal Plans</h1>
      
      {selectedPlan && (
        <div className="card" style={{ marginBottom: '40px' }}>
          <button 
            onClick={() => setSelectedPlan(null)}
            className="btn"
            style={{ marginBottom: '20px' }}
          >
            ← Back to All Plans
          </button>
          
          <h2>{selectedPlan.title}</h2>
          <p style={{ marginBottom: '20px' }}>{selectedPlan.description}</p>
          
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <div style={{ marginRight: '30px' }}>
              <strong>Calories:</strong> {selectedPlan.calories}
            </div>
            <div>
              <strong>Duration:</strong> {selectedPlan.duration}
            </div>
          </div>
          
          <h3>Recipes</h3>
          {selectedPlan.recipes.map((recipe, index) => (
            <div key={index} className="card" style={{ marginTop: '20px' }}>
              <h4>{recipe.name}</h4>
              
              <div style={{ marginTop: '15px' }}>
                <strong>Ingredients:</strong>
                <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div style={{ marginTop: '15px' }}>
                <strong>Instructions:</strong>
                <p style={{ marginTop: '5px' }}>{recipe.instructions}</p>
              </div>
              
              <div style={{ marginTop: '15px' }}>
                <a 
                  href={recipe.youtubeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Watch Tutorial
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {!selectedPlan && (
        <div className="grid">
          {mealPlans.map(plan => (
            <div key={plan.id} className="card meal-plan-card" onClick={() => handlePlanClick(plan)}>
              <img src={plan.image} alt={plan.title} className="meal-image" />
              <h3 className="meal-title">{plan.title}</h3>
              <p className="meal-description">{plan.description}</p>
              <div className="meal-meta">
                <span>Calories: {plan.calories}</span>
                <span>Duration: {plan.duration}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MealPlans;
