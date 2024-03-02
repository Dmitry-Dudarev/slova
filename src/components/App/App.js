import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import MainDefault from '../MainDefault/MainDefault';
import Cards from '../Cards/Cards';
import letterContext from '../../Contexts/letterContext';


function App() {

  const [currentLetter, setCurrentLetter] = React.useState('');

  const updateCurrentLetter = (newCurrentLetter) => {
    setCurrentLetter(newCurrentLetter)
  };



  return (

    <div className="app">
      <Header />
      <letterContext.Provider value={{currentLetter, setCurrentLetter}}>
        <main>
          <Routes>
            <Route path='/' element={<Main />}>
              <Route index element={<MainDefault />} />
              <Route path='/:letter' element={<Cards currentLetter={currentLetter} />} />
            </Route>

          </Routes>
        </main>
      </letterContext.Provider>
    </div>
  );
}

export default App;
