import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/main.css';
import Recipe from './components/Recipe';
import Loader from './components/Loader';
import Alert from './components/Alert';

const App = () => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [alert, setAlert] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const APP_ID = '3fad1c39';
  const APP_KEY = '27038ecae6f545057963723b9b786ba5';
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    const { data } = await axios.get(URL);
    setRecipes(data.hits);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search); // debuging
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (search === '') {
      return setAlert('Please enter the name of the recipe');
    }
    setQuery(search);
    setLoading(true);
    setSearch('');
    setAlert('');
  };

  useEffect(() => {
    getRecipes();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className='min-w-screen min-h-screen bg-indigo-500 flex dark:bg-black flex-col h-screen items-center'>
      <h1 className='text-7xl font-medium italic z-20 leading-loose font-sans uppercase text-white'>
        {/* font-normal text-3xl text-grey-darkest leading-loose my-3 w-full */}
        Food Recipe App
      </h1>
      {alert !== '' && <Alert alert={alert} />}
      <div className='w-full text-center'>
        <form onSubmit={getSearch}>
          <div className='max-w-sm mx-auto p-1 pr-0 flex items-center'>
            <input
              placeholder='Search recipe'
              type='text'
              value={search}
              className='flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none'
              onChange={onSearch}
            />
            <button
              type='submit'
              className='appearance-none bg-yellow-500 text-gray-100 text-base font-semibold tracking-wide p-3 rounded shadow hover:bg-indigo-light'
            >
              SEARCH
            </button>
          </div>
        </form>
      </div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className='grid grid-cols-3 gap-4 px-5 mt-5 overflow-y-auto bg-indigo-500 dark:bg-black max-h-full'>
            {recipes.map((recipe) => (
              <Recipe recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
