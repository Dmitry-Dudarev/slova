import React from "react";
import './Cards.css';
import letterContext from "../../Contexts/letterContext";
import { useLocation } from "react-router-dom";

function Cards(props) {
  // так как в контекст мы передали объект,
  // то извлекать будем конеретные свойства, обращаясь к ним через точку
  const letter = React.useContext(letterContext).currentLetter;

  // но доступ к текущей букве можно получить проще:
  // через текущий url

  // const letter = useLocation().pathname.at(-1);
  

  // мы получим выбранную пользователем букву
  // на основании этой буквы мы должны выбрать нужный файл
  // этот файл мы должны разобрать на подгруппы слов
  // для каждой подгруппы сделать крточку на основании элемента Card

  // в файле буквы лежит массив

  // попробуем ввести переменную, куда сложим данные из буквы-массива
  const [wordList, setWordList] = React.useState([]);

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
      })
  }, [letter]);

  
  if (!wordList[0]) {
    return (
      <p className="cards__no-item app-text">На выбранную вами букву не найдено слов</p>
    )
  }
  // внимание! проблема с повторными выводами!
  console.log(wordList)

  return (
    <section className="cards">
      <h3 className="cards__title app-text">Карточки на бкуву {letter}</h3>
      <div className="cards__container">

        <p className="cards__unit app-text">тут будут карточки со словами</p>
      </div>
    </section>
  )
};

export default Cards;