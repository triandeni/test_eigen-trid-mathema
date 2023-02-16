import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import List from './Component/List';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
