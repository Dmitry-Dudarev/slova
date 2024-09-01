import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { mainOpenState, letterButtonPushState, speechSynthesisAbilityState, speakerVoicesList, currentLanguage } from '../../state/atoms';
import Main from '../Main/Main';
import MainDefault from '../MainDefault/MainDefault';
import Cards from '../Cards/Cards';
import letterContext from '../../Contexts/letterContext';
import Lesson from '../Lesson/Lesson';
import Popup from '../Popup/Popup';

function App() {

  const [currentLetter, setCurrentLetter] = React.useState('');
  const [currentLesson, setCurrentLesson] = React.useState([]);
  const [isMainPageOpen, setIsMainPageOpen] = useRecoilState(mainOpenState);
  const [isLetterButtonPushed, setIsLetterButtonPushed] = useRecoilState(letterButtonPushState);
  const [isSpeechSynthAvailable, setIsSpeechSynthAvailable] = useRecoilState(speechSynthesisAbilityState);
  const [speakerVoices, setSpeakerVoices] = useRecoilState(speakerVoicesList);

  const location = useLocation().pathname;

  // установим переменную, отвечающую за возможность 
  // синтеза речи браузером в соответствующее значение
  React.useEffect(() => {
    if (window.speechSynthesis) {
      setIsSpeechSynthAvailable(true);
    }
  }, []);


  // Получим список голосов для озвучки
  React.useEffect(() => {
    // список голосов может загрузиться не сразу,
    // поэтому изначально метод может возвращать пустой массив
    // а значит добавим проверку длинны вернувшегося массива
    const populateVoiceList = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        setSpeakerVoices(voices);
      }
    }
    // инициируем загрузку голосов
    populateVoiceList();
    // подпишемся на событие изменения списка доступных голосов
    // когда браузер завершит их загрузку
    window.speechSynthesis.onvoiceschanged = populateVoiceList;
    // традиционно - отпишемся от события
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    }
  }, [setSpeakerVoices])

  React.useEffect(() => {
    if (location.endsWith("/slova/" || "/slova")) {
      setIsMainPageOpen(true)
      setIsLetterButtonPushed(false)
    } else {
      setIsMainPageOpen(false)
    };
  }, [location, setIsLetterButtonPushed, setIsMainPageOpen]);

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

      <Popup />

    </div>

  );
}

export default App;
