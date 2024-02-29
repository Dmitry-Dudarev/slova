import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import Letters from '../Letters/Letters';
import { ODFReader } from 'odf';

function App() {  
  // вводим переменную, которая будет содержать в себе список 
  // слов, импортируемых из .ods файла
  const [words, setWords] = React.useState([]);



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
