import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isMainOpen } from '../../state/atoms';
import Main from '../Main/Main';
import MainDefault from '../MainDefault/MainDefault';
import Cards from '../Cards/Cards';
import letterContext from '../../Contexts/letterContext';
import Lesson from '../Lesson/Lesson';


function App() {

  const [currentLetter, setCurrentLetter] = React.useState('');
  const [currentLesson, setCurrentLesson] = React.useState([]);

  const [isMainPageOpen, setIsMainPageOpen] = useRecoilState(isMainOpen);

  const location = useLocation().pathname;

  React.useEffect(()=> {
    if(location.endsWith("/slova/")){
      setIsMainPageOpen(true)
    } else {
      setIsMainPageOpen(false)
    }
  }, [location, isMainPageOpen, setIsMainPageOpen]);

  // React.useEffect(() => {
  //   let utterance = new SpeechSynthesisUtterance("Hello, dude");
  //   const voices = window.speechSynthesis.getVoices();
  //   utterance.voice = voices[5]
  //   speechSynthesis.speak(utterance)
  // }, [])

  // const updateCurrentLetter = (newCurrentLetter) => {
  //   setCurrentLetter(newCurrentLetter)
  // };

  const updateCurrentLesson = (newCurrentLesson) => {
    setCurrentLesson(newCurrentLesson)
  };

  return (

      <div className="app">
        <Header />
        <letterContext.Provider value={{ currentLetter, setCurrentLetter }}>
          <main>
            <Routes>
              <Route
                path='/slova/'
                element={
                  <Main />
                }>
                <Route index element={
                  <MainDefault />
                } />
                <Route path='/slova/:letter' element={
                  <Cards currentLetter={currentLetter} updateCurrentLesson={updateCurrentLesson} />
                } />

                <Route path='/slova/:letter/:number' element={
                  <Lesson currentLesson={currentLesson} />
                } />

              </Route>

            </Routes>
          </main>
        </letterContext.Provider>
      </div>

  );
}

export default App;
