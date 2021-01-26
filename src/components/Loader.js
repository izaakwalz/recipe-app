import React from 'react';

const Loader = () => {
  return (
    <div className='w-full h-full fixed block top-0 left-0 bg-indigo-500 opacity-75 z-50'>
      <span
        className='text-white opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0'
        style={{ top: '50%' }}
      >
        <i className='fas fa-circle-notch fa-spin fa-5x'></i>
      </span>
    </div>
  );
};

export default Loader;
