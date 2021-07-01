import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

import RecipeList from './recipe';
import SearchHeader from './SearchHeader';
import SearchNavbar from './SearchNav';
import {Tab,Tabs,Container} from 'react-bootstrap';
import AddFavourites from './components/addfavorites';
import RemoveFavourites from './components/removefavorites';
import searchpic from './img/search.gif'
function Search() {
  const APP_ID = '9c53ef61';
  const APP_KEY = '9adc5007ea55118eb3d99890a1d2dd9e';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    getRecipes(query);
  }, [query]);
  const getRecipes = async (query) => {
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
  useEffect(() => {
		const recipeFavourites = JSON.parse(
			localStorage.getItem('react-recipe-app-favourites')
		);

		if (recipeFavourites) {
			setFavourites(recipeFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-recipe-app-favourites', JSON.stringify(items));
	};

	const addFavouriterecipe = (recipe) => {
		const newFavouriteList = Array.from(new Set([...favourites, recipe]));
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriterecipe = (recipe) => {
		const newFavouriteList = favourites.filter(
			favourite => favourite.recipe.label !== recipe.recipe.label
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
  return (
    <>
      <SearchNavbar/>
      <SearchHeader/>
      <Tabs className="mt-1" defaultActiveKey="profile" id="controlled-tab-example">
      <Tab eventKey="home" title="Search">
        <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Happy Searching..." value={search} onChange={updateSearch} />
        <button className="search-button" type="submit"><img src={searchpic} alt="search" /></button>
        </form>
        <div className="recipes">
        <RecipeList
					recipes={recipes}
					handleFavouritesClick={addFavouriterecipe}
					favouriteComponent={AddFavourites}
				/>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Saved Recipes">
      <Container>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<h1>Favourites</h1>
			</div>
			<div className="recipes">
				<RecipeList
				  recipes={favourites}
					handleFavouritesClick={removeFavouriterecipe}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
      </Container>
    
      </Tab>
      </Tabs>

    </>
  );
}

export default Search;
