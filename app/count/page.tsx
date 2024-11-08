"use client";

import { useState, useEffect } from "react";

const CounterPage = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const [targetCount, setTargetCount] = useState(0);

  useEffect(() => {
    if (currentCount < targetCount) {
      const interval = setInterval(() => {
        setCurrentCount((prevCount) => {
          if (prevCount + 1 >= targetCount) {
            clearInterval(interval);
            return targetCount;
          }
          return prevCount + 1;
        });
      }, 500);

      // Clean up the interval when target is reached or component is unmounted
      return () => clearInterval(interval);
    }
  }, [currentCount, targetCount]);

  const handleIncrement = () => {
    setTargetCount((prevTarget) => prevTarget + 5);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Count: {currentCount}</h1>
      <button
        onClick={handleIncrement}
        className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none "
      >
        +5
      </button>
    </div>
  );
};

export default CounterPage;
