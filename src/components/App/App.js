import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import Letters from '../Letters/Letters';


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route
            path='/'
            element={<Letters />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
