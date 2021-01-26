import React from 'react';
import RecipeDetails from './RecipeDetails';

const Recipe = ({ recipe }) => {
  const { label, image, calories, ingredients } = recipe.recipe;

  return (
    <div
      key={label}
      className='px-3 py-3 flex flex-col border bg-white dark:bg-gray-900 border-gray-100 shadow-2xl rounded-md  justify-between'
    >
      <div>
        <div className='font-bold text-lg text-indigo-500'>{label}</div>
        <div className='font-light text-gray-700 dark:text-white'>
          Ingridients
        </div>
        <div className='flex flex-col mt-2 text-center'>
          <RecipeDetails ingredients={ingredients} />
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <span className='self-end font-bold text-base text-yellow-500'>
          {calories}
        </span>
        <img
          src={image}
          className=' h-16 w-16 object-cover rounded-md mt-1'
          alt={label}
        />
      </div>
    </div>
  );
};

export default Recipe;
