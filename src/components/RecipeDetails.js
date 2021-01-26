import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <span
        key={uuidv4()}
        class='font-medium text-base text-gray-800 dark:text-gray-50 m-1'
      >
        <span className='text-lg font-extrabold'>.</span> {ingredient.text}
      </span>
    );
  });
};

export default RecipeDetails;
