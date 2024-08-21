import React from "react";
import './Cards.css';
import { useLocation } from "react-router-dom";
// импортируем массив с возможными размерами урока
import { lessonSizes } from "../../words/lessonSizes";
import Card from "../Card/Card";

function Cards(props) {
  // так как в контекст мы передали объект,
  // то извлекать будем конеретные свойства, обращаясь к ним через точку
  // const letter = React.useContext(letterContext).currentLetter;

  // но доступ к текущей букве можно получить проще:
  // через текущий url

  const letter = useLocation().pathname.at(-1);

  // мы получим выбранную пользователем букву
  // на основании этой буквы мы должны выбрать нужный файл
  // этот файл мы должны разобрать на подгруппы слов
  // для каждой подгруппы сделать крточку на основании элемента Card

  // в файле буквы лежит массив

  // попробуем ввести переменную, куда сложим данные из буквы-массива
  const [wordList, setWordList] = React.useState([]);
  const [isConfiguratorSelected, setIsConfiguratorSelected] = React.useState(false);
  const [lessons, setLessons] = React.useState([]);

  // загрузим данные из нужного файла динамически
  // с помощью import
  // хук будет отслеживать пользовательский выбор новой буквы
  React.useEffect(() => {
    import(`../../words/${letter}.json`)
      .then((data) => {
        setWordList(data.default)
      })
      .catch((err) => {
        console.error(err);
        setWordList(
          [
            {
              "termin": "При загрузке карточек произошла ошибка"
            }
          ]
        );
      })
  }, [letter]);

  function onSelectorHandleClick(size) {
    setIsConfiguratorSelected(true);
    createLessons(wordList, size);
  };

  // создаем массив с массивами уроков
  function createLessons(words, size) {
    let startPoint = 0;
    let endPoint = startPoint + size;
    // если слов не набирается на полную карточку выбранного размера цикл должен выполниться 1 раз
    let counter = Math.ceil(words.length / size);
    let createdLessons = [];

    for (let i = 0; i < counter; i++) {
      createdLessons[i] = words.slice(startPoint, endPoint);
      startPoint = endPoint;
      endPoint = endPoint + size;
    }

    setLessons(createdLessons)
  };

  return (
    <section className="cards">
      <h3 className="cards__title app-text">Карточки на букву <span className="cards__title-letter">{letter.toUpperCase()}</span></h3>

      {/* необходимо реализовать опции урока */}

      <div className={
        `cards__configurator ${isConfiguratorSelected && "cards__configurator_hidden"}`
      }>
        <p className="configurator__title app-text">
          Выберите размер пакета карточек
        </p>
        <div className="configurator__buttons-container">
          {lessonSizes.map(size => (
            <div key={size} className="configurator__size-button" onClick={() => onSelectorHandleClick(size)}>
              <p className="configurator__size-button-text app-text app-link">{`x ${size}`}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={
        `cards__container ${!isConfiguratorSelected && "cards__container_hidden"}`
      }>

        {
          lessons.map(function (lesson, index) {
            return (<Card
              key={index}
              lesson={lesson}
              index={index}
              updateCurrentLesson={props.updateCurrentLesson}
            />)
          })
        }

      </div>
    </section>
  )
};

export default Cards;