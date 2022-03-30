import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox.js'
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [allFoods, setAllFoods] = useState(foods);
  const [filter, setFilter] = useState("");

  const addFood = (newFood) => {
    const updatedFoodList = [...allFoods, newFood];
    setAllFoods(updatedFoodList);
  }

  const deleteFood = (foodName) => {
    const filteredFood = allFoods.filter((food) => {
      return food.name !== foodName;
    });
    setAllFoods(filteredFood);
  };

  const changeFood = (index) => (update) => {
    const updatedFood = allFoods.map((food, current) => {
      if (index === current) {
        return { ...food, ...update };
      }
      return food;
    });
    setAllFoods(updatedFood);
  };

  const toFoodComponent = (food, index) => {
    return (
      <div>
        <FoodBox food={food} deleteFood={deleteFood} changeFood={changeFood(index)} />
      </div>
    );
  };

  const handleFilterUpdate = (e) => {
    setFilter(e.target.value);
  }

  return (
    <div className="App">
      Search: <input value={filter} onChange={handleFilterUpdate} />
      <h1> Add Food Entry </h1>
      <AddFoodForm addFood={addFood} />
      <h1>Food List</h1>
      {filter === "" ? allFoods.map(toFoodComponent) : allFoods.filter((food) => {
        const lowerFilter = filter.toLowerCase();
        return (
          food.name.toLowerCase().includes(lowerFilter)
        );
      }).map(toFoodComponent)}
    </div>
  );
}

export default App;
