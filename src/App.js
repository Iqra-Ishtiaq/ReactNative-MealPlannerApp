import './App.css';
import { useEffect,useState } from 'react';
import React from 'react';
import MealList from './MealList';

const App=()=> {
  const [mealData, setMealData] = useState(null)
  const [calories, setCalories] = useState(2000)
    function getMealData() {
      fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=337e04ff77fb4f3e9efdcefa37443098&timeFrame=day&targetCalories=${calories}`
      )
        .then(response => response.json())
        .then(data => {
          setMealData(data)
        })
        .catch(() => {
          console.log("error")
        })
    }
    function handleChange(e) {
      setCalories(e.target.value)
    }
  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {/* MealData is passing to MealList component */}
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
