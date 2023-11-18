import React, { useState } from 'react';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
  };

  return (
    <div className='w-full h-screen bg-slate-600'>
      <h1 className='text-center p-8 text-3xl font-bold text-yellow-600'>CALCULATOR</h1>
      <div className="container mx-auto mt-8 p-4 bg-gray-300 shadow-md max-w-xs">
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={expression}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[7, 8, 9, '/'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-2 bg-blue-500 text-white rounded"
          >
            {value}
          </button>
        ))}
        {[4, 5, 6, '*'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-2 bg-blue-500 text-white rounded"
          >
            {value}
          </button>
        ))}
        {[1, 2, 3, '-'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-2 bg-blue-500 text-white rounded"
          >
            {value}
          </button>
        ))}
        {['C', 0, '=', '+'].map((value) => (
          <button
            key={value}
            onClick={() =>
              value === 'C' ? handleClear() : value === '=' ? handleCalculate() : handleButtonClick(value)
            }
            className={`p-2 ${
              value === '=' ? 'bg-green-500' : 'bg-blue-500'
            } text-white rounded`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
    </div>
    
  );
};

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
