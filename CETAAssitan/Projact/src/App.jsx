import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>React Ӧ��ʾ��</h1>
      <div className="counter-container">
        <p>��ǰ����: {count}</p>
        <button onClick={() => setCount(count + 1)}>����</button>
        <button onClick={() => setCount(count - 1)}>����</button>
        <button onClick={() => setCount(0)}>����</button>
      </div>
    </div>
  );
}

export default App; 