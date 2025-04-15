import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
    const navigate=useNavigate();

  return (
    <div className="bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 min-h-screen text-white">
      <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 sm:px-16 md:px-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-center">
          Stay Focused, Create Your Todos
        </h1>
 
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <p>If You want to access TODO page,First you need to register youself by Clicking the Register Button</p>
        </div>
        

        <div className="mt-8">
          <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 rounded-lg text-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-30" onClick={()=>navigate('/todo')}>
            Start Creating Todos
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
