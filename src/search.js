import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe';
import SearchHeader from './SearchHeader';
import SearchNavbar from './SearchNav';
function Search() {
  const APP_ID = '9c53ef61';
  const APP_KEY = '9adc5007ea55118eb3d99890a1d2dd9e';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();
    setRecipes(data.hits);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <>
      <SearchNavbar/>
      <SearchHeader/>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Happy Searching..." value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            dishtype={recipe.recipe.dishType}
            url={recipe.recipe.url}
            yield={recipe.recipe.yield}
            time={recipe.recipe.totalTime}
            cuisinetype={recipe.recipe.cuisineType}
          />
        ))}
      </div>
    </>
  );
}

export default Search;
